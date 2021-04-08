import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import InputText from "../../Component/InputText";
import strings from "../../constants/lang"
import SendOtpButton from "../../Component/SendOtpButton"
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import actions from "../../redux/actions"
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
export default class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            
            isvalid:""
        };
      }
    
    
    
      
      setNumber = (text) => {

        this.setState({
            phoneNumber: text
        })
        
    
    
    }
    
    
    
    isValidate = () => {
        const { phoneNumber } = this.state;
    
        let errorMessage = validations({phoneNumber:phoneNumber})
        this.setState({
            isvalid:true
        })
        if (errorMessage) {


                 this.setState({  isvalid:false })
            showMessage({
                message: errorMessage,
                icon:"warning",
                type: "danger",
            });
            return false
        }
    
        return true
    }
    
    
    checkData = () => {
        const { phoneNumber} = this.state;
      const{navigation}=this.props;
        if (this.isValidate()) { 
            
            actions.loginWithOTP({contactDetails:{phoneNo: (phoneNumber),
              countryCode: "+91",
              countryCodeISO: "IN"}
            })
                .then(response => {

                    this.setState({  isvalid:false })
                   
                        this.props.navigation.navigate("OtpVerification" , {userId:response.data.userId ,phoneNumber:phoneNumber} )
                        
                        
                        
                        showMessage({
                            type:"success",
                            message:"OTP sent successfully "
                        })
                        
                        
                }).catch((error) => {
                    this.setState({ isvalid: false }),
                    showMessage({
                        type:"danger",
                        message:"Login failed "
                    })
                    
                        console.log(error)
                })
        }
    
    }




    render() {
        const{isvalid} = this.state
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <Image source={imagePath.profilePic} style={styles.loginBg}/>
                    <View>
                        <Text style={styles.text}>
                            Enter the Mobile Number associated with your account 
                        </Text>
                    </View>
                    <View style={styles.input}>
                    <InputText
                    placeholder={strings.ENTER_PHONE_NUMBER}
                    keyboardType={"numeric"}
                    onChangeText={this.setNumber}
                    />
                    </View>
                    <SendOtpButton buttonText={strings.SEND_OTP} onButtonCLick={()=>this.checkData()} isvalid={isvalid}/>
                    <View style={{marginVertical:15,}}>
                    <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
   
</View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        marginTop:"auto",
        marginBottom:"auto",
        position: 'relative'

    },
    text:{
        position:'absolute',
        fontSize:20,
    fontFamily: 'OpenSans-Bold',
        marginLeft:81,
        marginVertical:290
    },
    loginBg:{
     
        position: 'absolute',
        width:200,
        height:200,
        borderRadius:100,
        marginLeft:110,
        marginVertical:50
        
    }

})

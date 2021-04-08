import React, {Component} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  RefreshControl,
} from 'react-native';
import ColorsModal from '../../Component/ColorsModal';
import SendOtpButton from '../../Component/SendOtpButton';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';


export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalVisible:false,
      selected:'',
      colors:[{id:0,Name:"black",colorId:'#212529'},
      {id:1,Name:"red",colorId:'#8b0000'},
     { id:2,Name:"blue",colorId:'#0000ff'},
      {id:3,Name:"green",colorId:'#008000'},
      {id:4,Name:"yellow",colorId:'#ffd700'}]
    }

  }
  _onSelect=(id)=>{this.setState({selected:id})}

  _onOpenModal=()=>{this.setState({isModalVisible:true})}

  _onCloseModal=()=>{this.setState({isModalVisible:false})}

render(){
  const{isModalVisible,colors,selected}=this.state;
  return(
    <View>
    <View>
    <Image source={imagePath.profilePic} style={styles.image} />
    </View>
    <Text style={styles.text}>RAUSHAN KUMAR</Text>
    <Text style={styles.txt}>Code Brew Lab,Sector 27, Chandigarh</Text>
    <View style={styles.tt}>
      <Text style={{margin:20,fontFamily:'bold',fontSize:20}}>Photos </Text>
      <Text style={{margin:20,fontFamily:'bold',fontSize:20}}>Followers</Text>
      <Text style={{margin:20,fontFamily:'bold',fontSize:20}}>Follow</Text>
    </View>
    <View style={{flexDirection:'row',marginVertical:-40}}>
    <Text style={{margin:45,fontFamily:'bold',fontSize:20}}>20</Text>
      <Text style={{margin:45,fontFamily:'bold',fontSize:20}}>500</Text>
      <Text style={{margin:45,fontFamily:'bold',fontSize:20}}>100</Text>
    </View>
      {/* <Text>LOGOUT</Text> */}
      <SendOtpButton
      buttonText={strings.LOG_OUT}
      onButtonCLick={()=> actions.onLogout()}
      />
       <SendOtpButton
      buttonText={strings.CHANGE_THEME}
      onButtonCLick={()=> this._onOpenModal()}
      />
      <Modal transparent
        onRequestClose={()=>this._onCloseModal()}
        visible={isModalVisible}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5'}}>
          <FlatList
          data={colors}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=><ColorsModal data={item} onSelect={this._onSelect} selected={selected}/>}          


          />

          </View>
        </Modal>
      

    </View>
  )
}
}
const styles=StyleSheet.create({
  image:{
    height:150,
    width:150,
    marginLeft:128,
    borderRadius:100,
    marginVertical:30

  },
  text:{
    fontWeight:'bold',
    fontSize:27,
    marginLeft:95,
  },
  txt:{
    fontSize:20,
    marginLeft:36,
    marginVertical:5
  },
  tt:{
flexDirection:'row',
fontSize:30,
marginLeft:35,
marginVertical:20
  },
})
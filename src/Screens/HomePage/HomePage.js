import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Header from "../../Component/Header"
import InfiniteList from '../../Component/InfiniteList';
import strings from '../../constants/lang'
import actions from '../../redux/actions';
import { getCurrentLocation } from '../../utils/helperFunction';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            search:"",
            searchArray:[],
            cord:"",
            
        }
    }
    handleBackButtonClick=()=> {
        this.props.navigation.goBack(null);
        return true;
    }
    searchText=value=>{
const {search,cord}=this.state

this.setState({search:value});
getCurrentLocation()
.then(res=>{
    this.setState({cord:res})
})
.catch(err=>{
    console.log(err,"getCurrentlocation........error");
})
if (this.check){
    clearTimeout(this.check);
}
this.check=setTimeout(()=>{

    actions
    .userSearch(search,cord)
    .then(res=>{
        this.setState({searchArray:res.data})
        console.log(this.state.searchArray,'search');
    })
    .catch(err=>{
        this.setState({searchArray:[]});
        console.log(this.state.searchArray);
    });
},600);
    }
    render() {
        const{searchArray}=this.state
        return (
            <View>
                <Header textData={strings.HOME} onBack={()=>this.handleBackButtonClick()} />
                <Text> Home </Text>
                <View>
                    <TextInput placeholder="enter your name" onChangeText={this.searchText}/ >
                </View>
            <FlatList
                data={searchArray}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                keyExtractor={item=> item._id}
                renderItem={({item})=> <InfiniteList data={item}/>}
            />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({})

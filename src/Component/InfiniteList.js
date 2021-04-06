import { date } from 'is_js';
import React from 'react';
import {View, Text, Image, StyleSheet , SafeAreaView} from 'react-native';

export default function InfiniteList({data}) {
  return (
   
      <View style={styles.wraper}>
        <Image
          source={{uri: data.profileImg[1].original}}
          style={styles.profileImage}
        />
        <View style={{flexDirection:'column'}}>
        <Text style={styles.fullName}>Name:{data.fullName}</Text>
        <Text style={styles.fullName}>Gender:{data.gender}</Text>
        <Text style={styles.fullName}>DOB:{data.dob.month}</Text>
        <Text style={styles.fullName}>Intrest in:{data.lookingFor}</Text>
        </View>
     
        
      </View>
      
   
  );
}
const styles = StyleSheet.create({
  wraper: {
      flex:1,
      
    borderRadius: 20,
  
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  profileImage: {
    width: 130,
    height: 120,
    margin: 2,
    
    borderRadius: 10,

  },
  name:{
      marginTop:40
  },
  fullName:{
    color:'black',
    margin:3,
    marginLeft:10,
    fontSize:16

  }
  
});


import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings'



export default function Header({textData , onBack}) {
    const navigation=useNavigation();
    
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image source={imagePath.menuIcon} style={styles.backIcon} 
            />
            </TouchableOpacity>
                <Text style={styles.textData}>{textData}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    backIcon:{
        width:30,
        height:30,
        marginHorizontal: 15,
        marginVertical: 8,
    },
    textData:{
        marginVertical:5,
        fontSize:25
    }
})



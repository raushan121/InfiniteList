import React, { Component } from 'react'
import { View ,Text} from 'react-native'
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Header from '../../Component/Header';
import strings from '../../constants/lang';

 
class Imagezoom extends Component{
    render(){
        return(
            <View>
             <Header textData={strings.IMAGEZOOM} />
               <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'https://i.pinimg.com/236x/0c/3a/ea/0c3aea5b4497bca375614a4792542d3b--kawaii-marshmallow-marshmallow-treats.jpg'}}/>
            </ImageZoom>
            </View>
        );
    }
};
export default Imagezoom;

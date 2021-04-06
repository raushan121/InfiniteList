import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Profile , HomePage , List} from "../Screens/index";

const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
export default function(){


//   return(
//   //   <>
//   //   <Stack.Screen
//   //     name={navigationStrings.TAB_ROUTES}
//   //     options={{ headerShown: false }}
      
//   //     component={TabRoutes}
//   //   />      
    

    
//   //     </>
//   // )
// }
return(
<>
    <Drawer.Navigator initialRouteName={navigationStrings.HOMEPAGE}>
      <Drawer.Screen name={navigationStrings.HOMEPAGE} component={HomePage} />
      <Drawer.Screen name={navigationStrings.LIST} component={List} />
      <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} />

    </Drawer.Navigator>
  </>
)
}
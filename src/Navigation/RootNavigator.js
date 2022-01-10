import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../Screens/First';
import UserInputScreen from '../Screens/Second';
import { routes } from './Constants';
import ButtonScreen from '../Screens/Third';
const Stack = createStackNavigator();


const MainNavigator=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.FirstScreen}
      >
        <Stack.Screen
          name={routes.FIRSTSCREEN}
          component={FirstScreen}
        />
        <Stack.Screen
          name={routes.USERINFO}
          component={UserInputScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.BUTTONSCREEN}
          component={ButtonScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator ;

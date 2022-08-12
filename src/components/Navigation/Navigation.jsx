import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../views/Register/RegisterScreen';
import LoginScreen from '../../views/Login/LoginScreen';
import MainScreen from '../../views/Main/MainScreen';
import ProductDetailScreen from '../../views/ProductDetailScreen/ProductDetailScreen';
const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: '#3D3B3B',
    card: '#3D3B3B',
    text: '#fff',
  },
};

const RootNavigation = () => {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailProductScreen"
            component={ProductDetailScreen}
            options={{title: 'Back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootNavigation;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationTab from './TabNav';
import {RootStackParamList} from '../types/Navigation';
import { HomeScreen } from '../screens/exports';

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="initialTabNav"
          component={NavigationTab}
          //   initialParams={{userId: "defaultId", userToken: "defaultToken"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;

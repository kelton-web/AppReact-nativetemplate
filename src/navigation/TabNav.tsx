import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../types/Navigation';
import {ParametresScreen, SettingScreen} from '../screens/exports';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Parametres">
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Parametres" component={ParametresScreen} />
    </Tab.Navigator>
  );
}

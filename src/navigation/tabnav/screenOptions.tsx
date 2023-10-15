import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '@/types/Navigation';
import { Icon } from '@/components/iconImage/iconImage';

export const screenOptions: ({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList> }) => BottomTabNavigationOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({color, size}) => {
    let iconName;

    if (route.name === 'Settings') {
        iconName = 'profil';
    } else if (route.name === 'Parametres') {
        iconName = 'logo';
    } else {
        iconName = 'logo';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
});

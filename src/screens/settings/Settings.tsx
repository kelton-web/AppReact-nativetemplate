import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React, { useState } from 'react'
import ButtonOpacity from '@/components/button/ButtonOpacity';
import { AppNavigation } from '../../navigation/types';
import { RootStackParamList, RootTabParamList } from '../../types/Navigation';
import styles from './style'
import { useTheme } from '../../themes/ThemeProvider';
import { useTranslation } from 'react-i18next';

const SettingPage = ({navigation}: AppNavigation<RootTabParamList, 'Settings'>) => {
  const {t} = useTranslation('home');
  const { theme } = useTheme();


  return (
    <SafeAreaView>
      <Text>Setting</Text>
    </SafeAreaView>
  )
}

export default SettingPage
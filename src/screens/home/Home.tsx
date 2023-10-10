import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTranslationContext} from '../../translation/contexts/TranslationContext';
import {AppNavigation} from '../../navigation/types';
import {RootStackParamList, RootTabParamList} from '../../types/Navigation';
import {useTheme} from '../../themes/ThemeProvider';
import ButtonOpacity from '../../components/button/ButtonOpacity';
import styles from "./style"

const HomePage = ({navigation}: AppNavigation<RootStackParamList, 'Home'>) => {
  const {language, changeLanguage} = useTranslationContext();
  const {t} = useTranslation('home');
  const {theme, toggleTheme} = useTheme();

  const barStyle: StatusBarStyle = theme.text === '#000000' ? 'dark-content' : 'light-content';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar barStyle={barStyle} />

      <Text style={[styles.text, {color: theme.text}]}>{t('firsth1')}</Text>
      <ButtonOpacity
        buttonStyle={styles.buttonStyle}
        title={language === 'en' ? 'Changer en Français' : 'Change to English'}
        textStyle={styles.buttonText}
        buttonColor={theme.text}
        textColor={theme.background}
        onPress={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
        // onPress={() => navigation.navigate("initialTabNav")}
      />
      <ButtonOpacity
        buttonStyle={styles.buttonStyle}
        title={t('firsth1')}
        textStyle={styles.buttonText}
        buttonColor={theme.error}
        textColor={theme.background}
        onPress={() => navigation.navigate('initialTabNav')}
      />
      <ButtonOpacity
        buttonStyle={styles.buttonStyle}
        title={'change color'}
        textStyle={styles.buttonText}
        buttonColor={theme.info}
        textColor={theme.background}
        // onPress={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
        onPress={() => toggleTheme()}
      />
    </SafeAreaView>
  );
};

export default HomePage;



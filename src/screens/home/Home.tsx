import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTranslationContext} from '../../translation/contexts/TranslationContext';
import {AppNavigation} from '../../navigation/types';
import {RootStackParamList, RootTabParamList} from '../../types/Navigation';
import {useTheme} from '../../themes/ThemeProvider';
import ButtonOpacity from '../../components/button/ButtonOpacity';

const HomePage = ({
  navigation,
}: AppNavigation<RootStackParamList, 'Home'>) => {
  const {language, changeLanguage} = useTranslationContext();
  const {t} = useTranslation('home');
  const {theme, toggleTheme} = useTheme();

  const isLightTheme = theme.background === '#ffffff';
  const barStyle = isLightTheme ? 'dark-content' : 'light-content';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar barStyle={barStyle} />


      <Text style={[styles.text, {color: theme.text}]}>{t('firsth1')}</Text>
      <Button
        title={language === 'en' ? 'Changer en Français' : 'Change to English'}
        onPress={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
        // onPress={() => navigation.navigate("initialTabNav")}
      />
      <ButtonOpacity text={t("firsth1")} onPress={() => navigation.navigate("initialTabNav")} />
      <Button
        title={'change color'}
        // onPress={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
        onPress={() => toggleTheme()}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});

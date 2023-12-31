import React, { useRef } from 'react';
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
import styles from './style';
import RNSearchBar from '@/components/search/SearchBar';
import { RNTextInput } from '@/components/form/exports';
import { useZodForm } from '@/components/form/useZodForm';
import { LoginFormSchema } from '@/components/form/schemaZod/exports';
import { login } from '@/store/services/authService';
import { useUserStore } from '@/store/login/authStore'

const HomePage = ({navigation}: AppNavigation<RootStackParamList, 'Home'>) => {
  const {language, changeLanguage} = useTranslationContext();
  const {t} = useTranslation('home');
  const {theme, toggleTheme} = useTheme();

  const barStyle: StatusBarStyle =
    theme.text === '#000000' ? 'dark-content' : 'light-content';


    const { setToken, setUser, logout } = useUserStore();


    const { data, errors, setField, validate } = useZodForm(
      { email: '', password: '' },
      LoginFormSchema
    );
  

    const handleSubmit = async () => {
      if (validate()) {
        console.log('Data is valid:', data);
        try {
          const response = await login(data);
            if (response && response.token) {
            // Stockez le token JWT dans un état global (ou AsyncStorage, etc.)
            setToken(response.token);
  
            navigation.navigate('Home');
          } else {
            // Gérez le cas où le token n'est pas présent dans la réponse
            console.error('No token in response');
            // Affichez un message d'erreur à l'utilisateur
          }
        } catch (error) {
          console.error('Error logging in:', (error as Error).message);
          // Handle error, display a message to the user, etc.
        }
      }
    };


  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar barStyle={barStyle} />

      <Text style={[styles.text, {color: theme.text}]}>{t('firsth1')}</Text>
      <RNSearchBar />

      <RNTextInput
        label="Email"
        initialText={data.email}
        onChangeText={(text) => setField('email', text)}
        errorText={errors.email}
      />
      <RNTextInput
        label="Password"
        type="password"
        initialText={data.password}
        onChangeText={(text) => setField('password', text)}
        errorText={errors.password}
      />
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
      <ButtonOpacity
        buttonStyle={styles.buttonStyle}
        title="Submit"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};

export default HomePage;

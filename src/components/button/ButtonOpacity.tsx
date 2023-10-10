import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../themes/ThemeProvider';
import {useTranslation} from 'react-i18next';
import {useTranslationContext} from '../../translation/contexts/TranslationContext';

interface BtnProps {
  text: String;
  onPress: () => void;
}

const ButtonOpacity = ({text, onPress}: BtnProps) => {
  const {theme, toggleTheme} = useTheme();
  const backgroundColor = theme.background === '#000000' ? '#ffffff' : '#000000';
  const textColor = theme.text === '#000000' ? '#ffffff' : '#000000';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btnStyles, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOpacity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnStyles: {
    width: "70%",
    paddingVertical: 20,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
  }
});

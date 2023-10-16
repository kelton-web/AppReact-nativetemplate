import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from '../../utils/Metrics';

interface BtnProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonColor?: string;
  textColor?: string;
}

const ButtonOpacity = ({
  title,
  onPress,
  textStyle,
  buttonStyle,
  buttonColor,
  textColor,
}: BtnProps) => {
  return (
    <View style={[styles.container, buttonStyle]}>
      <TouchableOpacity
        style={[styles.btnStyles, {backgroundColor: buttonColor}]}
        onPress={onPress}>
        <Text style={[styles.text, textStyle, {color: textColor}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOpacity;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyles: {
    width: '70%',
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
});

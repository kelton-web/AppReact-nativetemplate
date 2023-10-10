import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: moderateScale(16),
  
    },
    buttonText: {
      fontSize: moderateScale(14),
      opacity: 0.9,
    },
    buttonStyle: {
      marginTop: horizontalScale(5),
    },
  });
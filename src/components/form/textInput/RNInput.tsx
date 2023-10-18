import React, {FC, useState} from 'react';
import {TextInput, TextInputProps} from 'react-native-paper';
import {RenderProps} from 'react-native-paper/lib/typescript/components/TextInput/types';
import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';
import {EyeVisible, EyeBlind} from '../../graphics/icons/exports';
import {View, Text} from 'react-native';

interface ExtendedTextInputProps extends TextInputProps {
  initialText?: string;
  type?: 'text' | 'password';
  mode?: 'flat' | 'outlined';
  left?: React.ReactNode;
  right?: React.ReactNode;
  label?: string;
  error?: boolean;
  selectionColor?: string;
  cursorColor?: string;
  underlineColor?: string;
  activeUnderlineColor?: string;
  outlineColor?: string;
  activeOutlineColor?: string;
  textColor?: string;
  dense?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  render?: (props: RenderProps) => React.ReactNode;
  contentStyle?: StyleProp<TextStyle>;
  outlineStyle?: StyleProp<ViewStyle>;
  underlineStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  errorText?: string | null;
}

const RNTextInput = React.forwardRef<any, ExtendedTextInputProps>(
  (
    {
      initialText = '',
      onChangeText,
      type = 'text',
      errorText = null,
      ...props
    },
    ref
  ) => {
  const [text, setText] = useState(initialText);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleChangeText = (inputText: string) => {
    setText(inputText);

    // Propagate the text change to the parent if an onChangeText prop is provided
    if (onChangeText) {
      onChangeText(inputText);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevState => !prevState);
  };

  const isPasswordField = type === 'password';
  const secureEntry = isPasswordField && !isPasswordVisible;

  return (
    <View>
      <TextInput
        ref={ref}
        value={text}
        onChangeText={handleChangeText}
        secureTextEntry={secureEntry}
        right={
          isPasswordField && (
            <TextInput.Icon
              icon={() =>
                isPasswordVisible ? (
                  <EyeBlind fill="red" />
                ) : (
                  <EyeVisible fill="gray" />
                )
              }
              onPress={togglePasswordVisibility}
            />
          )
        }
        {...props}
      />
      {errorText && <Text style={{color: 'red'}}>{errorText}</Text>}
    </View>
  );
});

export default RNTextInput;

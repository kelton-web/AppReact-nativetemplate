import React from 'react';
import { Image, ImageStyle } from 'react-native';

const images: Record<string, any> = {
    profil: require('@/assets/images/profil.png'),
    logo: require('@/assets/images/logo.png'),
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: ImageStyle;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000', style }) => {
  const imgSrc = images[name];

  return (
    <Image source={imgSrc} style={[{ width: size, height: size, tintColor: color }, style]} />
  );
};

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface AppNavigation<ParamList, Screen extends keyof ParamList> {
  navigation: NativeStackNavigationProp<ParamList, Screen>;
}
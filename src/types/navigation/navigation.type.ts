import {ISingleUser} from '../user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum SCREENS {
  USER_LIST = 'SCREEN:USER_LIST',
  SINGLE_USER = 'SCREEN:SINGLE_USER',
}

export type RootStackParamsList = {
  [SCREENS.USER_LIST]: undefined;
  [SCREENS.SINGLE_USER]: {userInfo: ISingleUser};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;

import MainScreen from '../../../screens/mainScreen';
import UserInfo from '../../../screens/userInfo';
import {SCREENS} from '../../../types/navigation';

const mainScreens = [
  {
    name: SCREENS.USER_LIST,
    component: MainScreen,
  },
  {
    name: SCREENS.SINGLE_USER,
    component: UserInfo,
    headerShown: true,
  },
];

export default mainScreens;

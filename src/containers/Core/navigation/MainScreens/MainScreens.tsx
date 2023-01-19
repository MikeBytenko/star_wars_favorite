import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {SCREENS} from '../../../../types/navigation';
import {mainScreens} from '../screens';

const Stack = createStackNavigator();
const screenOptions: StackNavigationOptions = {headerShown: false};

const MainScreens = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.USER_LIST}
    screenOptions={screenOptions}>
    {mainScreens.map(screen => (
      <Stack.Screen
        key={screen.name}
        name={screen.name.split(':')[1]}
        component={screen.component}
      />
    ))}
  </Stack.Navigator>
);

export default MainScreens;

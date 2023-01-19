import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Linking, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderIcon} from '../../../../assets/icons/HeaderIcon';
import {SCREENS} from '../../../../types/navigation';
import mainScreens from '../screens';

const Stack = createStackNavigator();
const screenOptions: StackNavigationOptions = {headerShown: false};

const MainScreens = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.USER_LIST}
    screenOptions={screenOptions}>
    {mainScreens.map(screen => (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={
          screen.headerShown
            ? ({route}: {route: any}) => ({
                headerShown: true,
                headerRight() {
                  const isIos = Platform.OS === 'ios';
                  const URL = 'https://www.incode-group.com/';

                  const handlePress = async () => {
                    try {
                      const supported = await Linking.canOpenURL(URL);

                      if (supported) {
                        await Linking.openURL(URL);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  };

                  return (
                    <>
                      {isIos && (
                        <TouchableOpacity onPress={handlePress}>
                          <HeaderIcon />
                        </TouchableOpacity>
                      )}
                    </>
                  );
                },
                headerTitle: route?.params?.userInfo?.name,
                headerTitleAlign: 'center',
                headerBackTitle: 'Back',
                headerBackTitleVisible: true,
                headerLeftContainerStyle: {borderColor: 'red'},
              })
            : undefined
        }
      />
    ))}
  </Stack.Navigator>
);

export default MainScreens;

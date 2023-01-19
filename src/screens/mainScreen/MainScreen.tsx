import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header';
import ListOfUsers from '../../components/ListOfUsers';
import Statistic from '../../components/Statistic';
import LoadingMainScreen from '../../components/LoadingMainScreen';
import {useGetAllUsers} from '../../hooks/useGetAllUsers/useGetAllUsers';
import {styles} from './styles';

const MainScreen = () => {
  const {loading: allUsersAreLoading} = useGetAllUsers();

  if (allUsersAreLoading) {
    return <LoadingMainScreen />;
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <Statistic />
      <ListOfUsers />
    </View>
  );
};

export default MainScreen;

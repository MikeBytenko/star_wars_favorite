import React from 'react';
import {Text} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../types/navigation';
import { SafeAreaView, View } from 'react-native';
import Header from '../../components/Header';
import Statistic from '../../components/Statistic/Statistic';
import ListOfUsers from '../../components/ListOfUsers';

export const UserInfo = () => {
  const {goBack} = useNavigation<NavigationProps>();
  console.log(123)
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 26,
      backgroundColor: '#f6f5f3',
    }}>
      <SafeAreaView />
      <Header />
    </View>
  );
};

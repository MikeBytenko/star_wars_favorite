import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {RootStackParamsList, SCREENS} from '../../types/navigation';
import {styles} from './styles';

export const UserInfo = () => {
  const {params} =
    useRoute<RouteProp<RootStackParamsList, SCREENS.SINGLE_USER>>();
  const {userInfo} = params;
  console.log(Object.values({...userInfo, id: null}));
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        {Object.values({...userInfo, id: null}).map((value, index) => {
          if (
            (typeof value === 'string' || typeof value === 'number') &&
            !Object.keys(userInfo)[index].includes('name')
          ) {
            return (
              <View style={styles.wrapper}>
                <Text style={styles.text}>{`${
                  Object.keys(userInfo)[index]
                }:  ${value}`}</Text>
              </View>
            );
          }

          if (typeof value === 'object' && value !== null) {
            return (
              <View style={styles.wrapper}>
                <Text style={styles.text}>{`${Object.keys(userInfo)[index]}: ${
                  value?.['__typename']
                }-${value?.name}`}</Text>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

import React from 'react';
import {Text, View} from 'react-native';
import {HeartIcon} from '../../assets/icons/HeartIcon';

import {
  StorageKeys,
  useGetStorageItem,
  useUpdateFavorites,
} from '../../services/AsyncStorageService';
import {ISingleUser} from '../../types/user';
import styles from './styles';

interface IProps {
  isLastChild?: boolean;
  user?: ISingleUser;
  isInfo?: boolean;
}

const SingleUser = ({isLastChild, user, isInfo = false}: IProps) => {
  const params = isInfo
    ? {
        name: 'Name',
        birth_year: 'BBY',
        gender: 'Gender',
        world: 'World',
        species: 'Species',
      }
    : {
        name: user?.name,
        birth_year: user?.birthYear.split('BBY')[0],
        gender: user?.gender,
        world: user?.homeworld.name,
        species: user?.species?.name || 'none',
      };

  const updateFavorites = useUpdateFavorites({});
  const {data: favorites} = useGetStorageItem(StorageKeys.Favorites);
  const onPressHearth = () => {
    user && updateFavorites.mutate({id: user?.id, gender: user?.gender});
  };
  const isActive = !!favorites?.find(favorite => favorite?.id === user?.id);
  return (
    <View
      style={[
        styles.container,
        isLastChild && styles.lastChild,
        isInfo && styles.firstChild,
      ]}>
      <View style={{width: '7%'}}>
        <View>
          <HeartIcon
            isInfo={isInfo}
            onPress={onPressHearth}
            isActive={isActive}
          />
        </View>
      </View>
      <View style={[{width: '23%'}, isInfo && styles.twoSideBorders]}>
        <Text style={styles.alignCenter}>{params.name}</Text>
      </View>
      <View style={[{width: '15%'}, isInfo && styles.borders]}>
        <Text style={styles.alignCenter}>{params.birth_year}</Text>
      </View>
      <View style={[{width: '18%'}, isInfo && styles.borders]}>
        <Text style={styles.alignCenter}>{params.gender}</Text>
      </View>
      <View style={[{width: '20%'}, isInfo && styles.borders]}>
        <Text style={styles.alignCenter}>{params.world}</Text>
      </View>
      <View style={{width: '18%'}}>
        <Text style={styles.alignCenter}>{params.species}</Text>
      </View>
    </View>
  );
};

export default SingleUser;

import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  StorageKeys,
  useGetStorageItem,
} from '../../services/AsyncStorageService';
import StatisticContainer from '../StatisticContainer';
import {styles} from './styles';
enum Gender {
  male = 'male',
  female = 'female',
  other = 'n/a',
}

const Statistic = () => {
  const {data: favorites} = useGetStorageItem(StorageKeys.Favorites);
  const [amountValues, setAmountValues] = useState({
    male: 0,
    female: 0,
    other: 0,
  });

  useEffect(() => {
    const values = {male: 0, female: 0, other: 0};
    favorites?.forEach(value => {
      const {gender} = value;
      if (gender === Gender.male) {
        values.male += 1;
        return;
      }
      if (gender === Gender.female) {
        values.female += 1;
        return;
      }
      values.other += 1;
    });
    setAmountValues(values);
  }, [favorites]);

  return (
    <View style={styles.container}>
      <StatisticContainer amount={amountValues.female} title={'Female Fans'} />
      <StatisticContainer amount={amountValues.male} title={'Male Fans'} />
      <StatisticContainer amount={amountValues.other} title={'Others'} />
    </View>
  );
};

export default Statistic;

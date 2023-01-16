import {Text, View} from 'react-native';
import {styles} from './styles';

interface IProps {
  amount?: number;
  title: string;
}

const StatisticContainer = ({amount = 0, title}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default StatisticContainer;

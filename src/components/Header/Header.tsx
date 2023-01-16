import {Text, TouchableOpacity, View} from 'react-native';
import {useUpdateFavorites} from '../../services/AsyncStorageService';
import {styles} from './styles';

const Header = () => {
  const removeAllFavorites = useUpdateFavorites({removeAll: true});
  const onClearFans = () => {
    removeAllFavorites.mutate(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fansText}> Fans</Text>
      <TouchableOpacity style={styles.button} onPress={onClearFans}>
        <Text style={styles.buttonText}>Clear Fans</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  wrapper: {paddingHorizontal: 10, width: 100, paddingVertical: 5},
  amount: {fontSize: 30},
  title: {fontWeight: '200', fontSize: 12},
});

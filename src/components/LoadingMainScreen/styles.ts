import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  infoContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 10},
  container: {flex: 1},
  item1: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#b7b6b6',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
    width: '90%',
    height: '74%',
    alignSelf: 'center',
    marginTop: 15,
  },
  info: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#b7b6b6',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
    width: '28%',
    alignSelf: 'center',
  },
  mainViewStyle: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 5,
    marginTop: 30,
  },
});

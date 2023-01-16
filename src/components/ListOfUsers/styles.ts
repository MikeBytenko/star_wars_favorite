import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '90%',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    width: '100%',
  },
  input: {
    height: 20,
    fontSize: 16,
    opacity: 0.5,
    color: 'black',
  },
  userListWrapper: {paddingHorizontal: 10},
  currentTextWrapper: {
    marginRight: 5,
  },
  iconsWrapper: {flexDirection: 'row'},
});

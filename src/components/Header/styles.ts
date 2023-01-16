import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: Platform.OS == 'android' ? 10 : 0,
  },
  fansText: {fontSize: 30, fontWeight: '300'},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
  },
  buttonText: {
    marginTop: 0,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    color: 'red',
  },
});

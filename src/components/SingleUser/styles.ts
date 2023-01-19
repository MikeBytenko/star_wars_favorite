import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingRight: 12,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',

    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '#DADADA',
    borderRightColor: '#DADADA',
  },
  firstChild: {
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    marginBottom: 1,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  lastChild: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  alignCenter: {textAlign: 'center'},
  borders: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  twoSideBorders: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
  },
  blueColor: {
    color: 'blue',
  },
});

export default styles;

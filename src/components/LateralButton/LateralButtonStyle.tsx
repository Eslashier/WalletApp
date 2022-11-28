import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    marginLeft: 15,
    paddingLeft: 5,
    textAlign: 'right',
    justifyContent: 'center',
    width: 40,
  },
});

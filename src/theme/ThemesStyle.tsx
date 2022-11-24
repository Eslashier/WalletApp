import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  containerRowButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  content: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  subText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

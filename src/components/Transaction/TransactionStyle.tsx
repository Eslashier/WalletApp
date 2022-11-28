import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 75,
    marginTop: 18,
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
  },
  imageSize: {
    padding: 5,
    margin: 20,
    width: 40,
    height: 40,
  },
  textAndValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 290,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  value: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  visible: {
    backgroundColor: '#1554F7',
    height: 50,
    marginHorizontal: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 1,
    borderRadius: 7,
    justifyContent: 'center',
  },
  visibleWhite: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 1,
    borderRadius: 7,
    justifyContent: 'center',
  },
  notVisible: {
    display: 'none',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#1554F7',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

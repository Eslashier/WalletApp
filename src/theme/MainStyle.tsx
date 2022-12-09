import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  notVisible: {
    display: 'none',
  },
  containerLogo: {
    backgroundColor: 'white',
    flex: 0.4,
    justifyContent: 'center',
  },
  containerForm: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    fontSize: 18,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 10,
    borderRadius: 7,
    flex: 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 18,
    marginLeft: 5,
    paddingLeft: 5,
    flex: 0.15,
    textAlign: 'right',
    justifyContent: 'center',
  },
  space: {
    height: 30,
  },
  balance: {
    flex: 0.2,
    backgroundColor: '#1554F7',
    justifyContent: 'flex-start',
  },
  textBalance: {
    color: 'white',
    textAlign: 'center',
    fontSize: 55,
    marginTop: 30,
  },
  transactions: {
    flex: 0.8,
    backgroundColor: 'white',
  },
});

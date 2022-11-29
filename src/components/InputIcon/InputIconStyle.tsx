import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 10,
    borderRadius: 7,
    flex: 0.8,
  },
  inputError: {
    height: 50,
    fontSize: 18,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
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
  error: {
    marginLeft: 75,
    color: 'red',
  },
});

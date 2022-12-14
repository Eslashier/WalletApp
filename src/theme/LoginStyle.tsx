import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  notVisible: {
    display: 'none',
  },
  containerTop: {
    backgroundColor: 'white',
    flex: 0.4,
    justifyContent: 'center',
  },
  containerForm: {
    backgroundColor: 'white',
    flex: 0.6,
    justifyContent: 'flex-start',
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 18,
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 10,
    borderRadius: 7,
  },
  logo: {
    width: 150,
    height: 150,
  },
});

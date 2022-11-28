import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 40,
    alignContent: 'center',
    alignItems: 'center',
    flex: 0.3,
  },
  imageSize: {
    padding: 5,
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  buttonContainer: {
    marginTop: 40,
    alignContent: 'center',
    flex: 0.3,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.4,
  },
  logo: {
    alignContent: 'flex-end',
    padding: 5,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

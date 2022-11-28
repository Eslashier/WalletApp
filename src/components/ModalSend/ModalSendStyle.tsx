import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taxesText: {
    fontSize: 12,
    textAlign: 'left',
  },
  totalContainer: {
    alignContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    width: 375,
    alignItems: 'center',
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    width: 375,
    alignContent: 'space-between',
  },
  total: {
    flex: 0.2,
    alignItems: 'flex-start',
  },
  ammount: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttons: {
    alignItems: 'center',
    width: '100%',
    borderColor: 'red',
  },
});

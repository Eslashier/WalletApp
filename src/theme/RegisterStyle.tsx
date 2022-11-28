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
    flex: 0.6,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

import React from 'react';
import {Modal, Text, View} from 'react-native';
import {ColorButton} from '../ColorButton/ColorButton';
import {styles} from './ModalLoanStyle';

interface Props {
  isVisible: boolean;
  actionButtonTake: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalLoan = ({isVisible, actionButtonTake, setState}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setState(!isVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Your loan has been approved, {'\n'} Do you want to continue?
          </Text>
          <ColorButton
            text={'Yes, please'}
            color={'blue'}
            action={actionButtonTake}
          />
          <ColorButton
            text={'Take it later'}
            color={'white'}
            action={() => setState(!isVisible)}
          />
        </View>
      </View>
    </Modal>
  );
};

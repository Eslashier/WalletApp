import React from 'react';
import {Modal, Text, View} from 'react-native';
import { ColorButtonSmaller, ColorButton, ColorButtonWidder } from '../ColorButton/ColorButton';
import {styles} from './ModalSendStyle';

interface Props {
  isVisible: boolean;
  ammount: string;
  actionButtonTake: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSend = ({
  isVisible,
  ammount,
  actionButtonTake,
  setState,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setState(!isVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <View style={styles.topContainer}>
              <View style={styles.total}>
                <Text style={styles.totalText}>Total</Text>
              </View>
              <View style={styles.ammount}>
                <Text style={styles.totalText}>
                  {'$ ' + ammount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                </Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.taxesText}>Taxes not included</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <ColorButtonWidder
              text={'Pay'}
              color={'blue'}
              action={actionButtonTake}
            />
            <ColorButtonWidder
              text={'Cancel'}
              color={'white'}
              action={() => setState(!isVisible)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

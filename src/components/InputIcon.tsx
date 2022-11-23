import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Zocial';
import {styles} from './InputIconStyle';

interface Props {
  icon: string;
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export const InputIcon = ({icon, placeholder, setState}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={icon} color="grey" size={35} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={input => setState(input)}
      />
    </View>
  );
};

export const InputIconPassword = ({icon, placeholder, setState}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={icon} color="grey" size={35} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={input => setState(input)}
        secureTextEntry={true}
      />
    </View>
  );
};

import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './InputIconStyle';

interface PropsString {
  icon: string;
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
}

export const InputIcon = ({
  icon,
  placeholder,
  setState,
  error,
}: PropsString) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name={icon} color="grey" size={35} />
        </View>
        <TextInput
          placeholder={placeholder}
          style={{...(error ? styles.inputError : styles.input)}}
          onChangeText={input => setState(input)}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </>
  );
};

// eslint-disable-next-line prettier/prettier
export const InputIconPassword = ({icon, placeholder, setState}: PropsString) => {
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

interface PropsNumber {
  icon: string;
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<number>>;
  error?: string;
}

export const InputIconNumber = ({
  icon,
  placeholder,
  setState,
  error,
}: PropsNumber) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name={icon} color="grey" size={35} />
        </View>
        <TextInput
          keyboardType="numeric"
          placeholder={placeholder}
          style={{...(error ? styles.inputError : styles.input)}}
          onChangeText={input => {
            setState(+input);
          }}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </>
  );
};

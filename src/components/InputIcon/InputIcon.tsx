import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './InputIconStyle';

interface PropsString {
  icon: string;
  placeholder: string;
  touched: boolean;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  state: string | undefined;
  error?: string;
}

export const InputIcon = ({
  icon,
  placeholder,
  touched,
  setTouched,
  setState,
  state,
  error,
}: PropsString) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name={icon} color="grey" size={35} />
        </View>
        <TextInput
          value={state ? state : ''}
          placeholder={placeholder}
          style={{...(error && touched ? styles.inputError : styles.input)}}
          onChangeText={input => {
            setState(input);
            setTouched(true);
          }}
        />
      </View>
      <Text style={styles.error}>{error && touched ? error : ''}</Text>
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
  touched: boolean;
  setTouched: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number | undefined;
  error?: string;
}

export const InputIconNumber = ({
  icon,
  placeholder,
  touched,
  setTouched,
  setState,
  state,
  error,
}: PropsNumber) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name={icon} color="grey" size={35} />
        </View>
        <TextInput
          value={state ? state.toString() : ''}
          keyboardType="numeric"
          placeholder={placeholder}
          style={{...(error && touched ? styles.inputError : styles.input)}}
          onChangeText={input => {
            setState(+input);
            setTouched(true);
          }}
        />
      </View>
      <Text style={styles.error}>{error && touched ? error : ''}</Text>
    </>
  );
};

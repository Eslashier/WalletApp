import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './TransactionStyle';

interface Props {
  text: string;
  value: string;
  date: string;
  img: ImageSourcePropType;
  account: string;
}

const localAccount = '1';

export const Transaction = ({text, value, date, img, account}: Props) => {
  const d = date.slice(8, 10);
  const m = date.slice(5, 7);
  const y = date.slice(0, 4);
  let hh = date.slice(11, 13);
  const mm = date.slice(14, 16);
  let dayTime = 'PM';

  if (+hh > 12) {
    hh = (+hh - 12).toString();
    dayTime = 'AM';
  }

  const formattedDate =
    d + '/' + m + '/' + y + ' - ' + hh + ':' + mm + ' ' + dayTime;

  return (
    <View style={styles.container}>
      <Image style={styles.imageSize} source={img} />
      <View>
        <View style={styles.row}>
          <View style={styles.textAndValue}>
            <View>
              <Text style={styles.text}>{text}</Text>
            </View>
            <View>
              <Text
                style={
                  (styles.value,
                  {...(account === localAccount ? styles.green : styles.red)})
                }>
                {'$ ' + value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </View>
  );
};

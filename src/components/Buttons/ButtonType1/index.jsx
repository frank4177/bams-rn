import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/theme';
import {scale} from 'react-native-size-matters';

export default function ButtonType1({backgroundColor, color, title, width, height, handleClick}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: `${
            backgroundColor ? backgroundColor : colors.button
          }`,
          width: width ? scale(width) : scale(127),
          height: width ? scale(height) : scale(37),
        },
      ]} onPress={()=> handleClick()}>
      <Text style={[styles.title, {color: `${color ? color : 'white'}`}]}>
        {title ? title : 'Button'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: '15@s',
    color: 'white',
    fontWeight: '600',
  },
});

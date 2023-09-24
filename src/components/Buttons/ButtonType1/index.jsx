import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/theme';
import {scale} from 'react-native-size-matters';

export default function ButtonType1({backgroundColor, color, title, width}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: `${
            backgroundColor ? backgroundColor : colors.button
          }`,
          width: width ? scale(width) : scale(327),
        },
      ]}>
      <Text style={[styles.title, {color: `${color ? color : 'white'}`}]}>
        {title ? title : 'Button'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  button: {
    height: '45@s',
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

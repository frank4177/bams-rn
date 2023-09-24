import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

export default function SearchBar() {
  return (
    <View style={styles.inputWrap}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.img}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#818181"
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  inputWrap: {
    borderColor: colors.border,
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '45@s',
    // width: '90%',
    gap: 12,
  },
  img: {
    height: '22@s',
    width: '22@s',
  },
  input: {
    paddingLeft: 2,
    width: '100%',
    fontSize: '15@s',
  },
});

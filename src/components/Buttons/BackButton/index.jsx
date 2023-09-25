import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => handleBack()}>
      <Image
        source={require('../../../assets/icons/Back.png')}
        style={styles.btnIcon}
      />
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  btnIcon: {
    height: '40@s',
    width: '40@s',
  },
});

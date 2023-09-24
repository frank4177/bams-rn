import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../utils/theme';

export default function ButtonType2() {
  return (
    <View style={styles.button}>
        <Image
          source={require('../../../assets/icons/bag.png')}
          style={styles.img}
        />
      <Text style={styles.title}>Button</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
    button: {
      height: '40@s',
      width:"135@s",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor: colors.button,
      padding:14,
      borderRadius:30
    },
    img: {
      width: "18@s",
      height:"20@s"
    },
    title:{
        fontSize:"13@s",
        color:"white",
        fontWeight:"400"
    }
  });
  
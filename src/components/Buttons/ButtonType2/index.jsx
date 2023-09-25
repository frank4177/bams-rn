import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../utils/theme';

export default function ButtonType2({backgroundColor, color, title, width, handleClick}) {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> handleClick()}>
        <Image
          source={require('../../../assets/icons/bag.png')}
          style={styles.img}
        />
      <Text style={styles.title}>{title ? title : 'Button'}</Text>
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
    button: {
      height: '37@s',
      width:"135@s",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      backgroundColor: colors.button,
      paddingLeft:"14@s",
      borderRadius:30,
      gap:10
    },
    img: {
      width: "18@s",
      height:"20@s"
    },
    title:{
      fontSize: '15@s',
      color: 'white',
      fontWeight: '600',
    }
  });
  
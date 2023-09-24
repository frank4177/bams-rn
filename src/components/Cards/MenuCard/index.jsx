import {View, Text, Image, TouchableWithoutFeedback, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import stew from '../../../assets/Images/stew.png';
import {ScaledSheet} from 'react-native-size-matters';
import { colors } from '../../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import ButtonType2 from '../../Buttons/ButtonType2';

export default function MenuCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate("ProductDetail")}>
      <Image
          source={require('../../../assets/icons/heart.png')}
          style={styles.icon}
        />
      <View style={styles.innerWrap}>
        <Image
          source={item.image}
          style={styles.img}
        />

        <View style={styles.titleAndPriceWrap}>
          <Text style={styles.title}>Lreem</Text>
          <Text style={styles.price}>$56</Text>
        </View>

        <ButtonType2/>
      </View>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  card:{
    backgroundColor:"#FFFFFF",
    width:"160@s",
    height:"230@s",
    borderRadius:10,
    position:"relative",
    margin:7
  },
  icon: {
    position:"absolute",
    height: '19@s',
    width: '20@s',
    right: 10,
    top:10
  },
  innerWrap: {
    height: '100%',
    width: '100%',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
    padding:10,
  },
  img: {
    height: '92@s',
    width: '92@s',
    marginTop:34
  },
  titleAndPriceWrap:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width: "100%"
  },
  title:{
    fontSize:"15@s",
    fontWeight: "800",
    
  },
  price:{
    color: colors.red,
    fontSize:"15@s",
    fontWeight: "800"
  }
});

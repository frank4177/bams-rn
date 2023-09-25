import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { decreaseCart, increaseCart, removeProduct } from '../../../services/redux/features/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../utils/theme';
import { formatCurrency } from '../../../utils/currencyFormater';
import {PlusIcon, MinusIcon} from 'react-native-heroicons/outline';

export const CartCard = ({item}) => {
    const dispatch = useDispatch();
  
    const removeItem = () => {
      dispatch(removeProduct(item));
    };
  
    const increaseItem = () => {
      dispatch(increaseCart(item));
    };
  
    const decreaseItem = () => {
      dispatch(decreaseCart(item));
    };
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.img} />
        <View style={styles.cardTitleWrap}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{formatCurrency(item.price)}</Text>
          <TouchableOpacity onPress={()=> removeItem()}>
            <Image
              source={require('../../../assets/icons/bin.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
  
        {/* INCREAE AND DECREASE */}
        <View style={styles.increaseWrap}>
          <TouchableOpacity
            style={styles.increase}
            onPress={() => decreaseItem(item)}>
            <MinusIcon strokeWidth={2} color="black" />
          </TouchableOpacity>
          <Text style={styles.count}>
            {item.quantity < 10 ? item.quantity : item.quantity}
          </Text>
          <TouchableOpacity
            style={styles.increase}
            onPress={() => increaseItem()}>
            <PlusIcon strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const styles = ScaledSheet.create({
    card: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '130@s',
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 15,
      margin: '7@s',
    },
    titleWrap: {
      height: '70@s',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: colors.border,
      borderBottomWidth: 2,
    },
    cardTitleWrap: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 15,
    },
    title: {
      color: colors.heading,
      fontSize: '17@s',
    },
    img: {
      height: '82@s',
      width: '82@s',
    },
    icon: {
      height: '22@s',
      width: '19@s',
    },
    increaseWrap: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 5,
      width: '36@s',
      justifyContent: 'space-between',
      height: '95%',
    },
    increase: {
      height: '30@s',
      width: '30@s',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.border,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    count: {
      color: colors.text,
      fontWeight: '800',
      fontSize: '15@s',
    },
    price: {
      color: colors.red,
      fontSize: '17@s',
      fontWeight: '800',
    }
  });
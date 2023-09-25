import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import stew from '../../../assets/Images/stew.png';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import ButtonType2 from '../../Buttons/ButtonType2';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  increaseQuantity,
} from '../../../services/redux/features/cartSlice';
import ButtonType1 from '../../Buttons/ButtonType1';

export default function MenuCard({item}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector(state => state?.cart?.products);

  const handleAddCart = () => {
    dispatch(addProduct(item));
    // dispatch(increaseQuantity());
  };

  // Check if item has been added
  const itemInCart = cartItems?.find(ite => {
    return ite.id === item.id;
  });

  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/icons/heart.png')}
        style={styles.icon}
      />
      <TouchableOpacity
        style={styles.innerWrap}
        onPress={() => navigation.navigate('ProductDetail', {...item})}>
        <Image source={item.image} style={styles.img} />

        <View style={styles.titleAndPriceWrap}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>£{item.price}</Text>
        </View>
        {/* <ButtonType1
            title="Remove"
            handleClick={handleAddCart}
            width={135}
            height={37}
            backgroundColor="orange"
          /> */}
       
          <ButtonType2 title="Add to cart" handleClick={handleAddCart} />
        
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: '160@s',
    height: '230@s',
    borderRadius: 10,
    position: 'relative',
    // margin:"7@s"
  },
  icon: {
    position: 'absolute',
    height: '23@s',
    width: '25@s',
    right: 15,
    top: 15,
  },
  innerWrap: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  img: {
    height: '92@s',
    width: '92@s',
    marginTop: 34,
  },
  titleAndPriceWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: '15@s',
    fontWeight: '700',
  },
  price: {
    color: colors.red,
    fontSize: '15@s',
    fontWeight: '800',
  },
});

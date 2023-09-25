import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import BackButton from '../../components/Buttons/BackButton';
import ProductCarousel from '../../components/Carousels/ProductCarousel';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';
import Accordion from '../../components/Accordion';
import {accordionData} from '../../utils/constants';
import ButtonType1 from '../../components/Buttons/ButtonType1';
import {PlusIcon, MinusIcon} from 'react-native-heroicons/outline';
import {formatCurrency} from '../../utils/currencyFormater';
import {
  addProduct,
  addProductDetail,
  increaseQuantity,
} from '../../services/redux/features/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function ProductDetailScreen(props) {
  const data = props?.route?.params;
  const {id, title, price, description, allImages} = props?.route?.params;
  const [isExpanded, setIsExpanded] = useState(10);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state?.cart?.products);

  const increaseItem = () => {
    setCount(prev => prev + 1);
  };

  const decreaseItem = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const handleAddCart = () => {
    if (cartItems?.length <= 0) {
      dispatch(addProductDetail(data));
    } else {
      dispatch(
        increaseQuantity({
          data: data,
          count: count,
        }),
      );
    }
  };

  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <BackButton />
        <ProductCarousel data={allImages} />

        {/* DESCRIPTION */}
        <View>
          {/* Title */}
          <View style={styles.titleWrap}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{formatCurrency(price)}</Text>
          </View>

          {/* About Product */}
          <Text style={styles.desc}>
            {description.split(' ').slice(0, isExpanded).join(' ')}
            <Text>
              {isExpanded <= 10 ? <Text>...</Text> : null}
              {isExpanded <= 10 ? (
                <Text
                  style={styles.show}
                  onPress={() => setIsExpanded(description.length - 1)}>
                  Read More
                </Text>
              ) : (
                <Text style={styles.show} onPress={() => setIsExpanded(10)}>
                  Show less
                </Text>
              )}
            </Text>
          </Text>
        </View>

        {/* ACCORDION */}
        <Accordion data={accordionData} />

        {/* INCREAE AND DECREASE */}
        <View style={styles.increaseWrap}>
          <TouchableOpacity
            style={[styles.increase, {opacity: count === 1 ? 0.6 : 1}]}
            onPress={() => decreaseItem()}>
            <MinusIcon
              strokeWidth={2}
              color="black"
              style={{opacity: count === 1 ? 0.6 : 1}}
            />
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            style={styles.increase}
            onPress={() => increaseItem()}>
            <PlusIcon strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonWrap}>
          <ButtonType1
            title="Add to cart"
            width={327}
            height={45}
            handleClick={handleAddCart}
          />
          <ButtonType1
            backgroundColor="white"
            color={`${colors.red}`}
            title="Subscribe to a Plan"
            width={327}
            height={45}
          />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = ScaledSheet.create({
  wrapper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: '25@s',
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '17@s',
    fontWeight: '800',
    color: colors.text,
  },
  price: {
    color: colors.red,
    fontSize: '17@s',
    fontWeight: '800',
  },
  desc: {
    fontSize: '14@s',
    lineHeight: '23@s',
    color: colors.text,
  },
  show: {
    fontSize: '12@s',
    color: colors.red,
  },
  buttonWrap: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  increaseWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
  increase: {
    height: '45@s',
    width: '45@s',
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
});

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import {colors} from '../../utils/theme';
import {ScaledSheet} from 'react-native-size-matters';
import {formatCurrency} from '../../utils/currencyFormater';
import {useDispatch, useSelector} from 'react-redux';
import {CartCard} from '../../components/Cards/CartCard';
import ButtonType1 from '../../components/Buttons/ButtonType1';

export default function MenuScreen() {
  const cartItems = useSelector(state => state?.cart?.products);
  const total = useSelector(state => state?.cart?.total);

  console.log(total)
  return (
    <SafeAreaWrapper>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        numColumns={1}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Cart</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            {cartItems?.length <= 0 ? (
              <Text style={styles.empty}>Cart is empty</Text>
            ) : null}

            {cartItems?.length > 0 ? (
              <>
                <View style={styles.totalWrap}>
                  <Text style={styles.total}>
                    Total({cartItems.length} items)
                  </Text>
                  <Text style={styles.total}>{formatCurrency(total)}</Text>
                </View>
                <View style={styles.buttonWrap}>
                  <ButtonType1
                    title={`Checkout - ${formatCurrency(total)}`}
                    width={327}
                    height={45}
                  />
                </View>
              </>
            ) : null}
          </View>
        )}
        renderItem={({item}) => {
          return <CartCard item={item} />;
        }}
      />
    </SafeAreaWrapper>
  );
}

const styles = ScaledSheet.create({
  listContainer: {
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    paddingBottom: 10,
    gap: 10,
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
  title: {
    color: colors.heading,
    fontSize: '17@s',
  },
  totalWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop:"29@s",
    marginBottom:7,
    marginHorizontal: 20
  },
  total: {
    fontSize: '18@s',
    fontWeight: '600',
    color:"black"
  },
  empty: {
    fontSize: '20@s',
    fontWeight: '700',
    color:"black"
  },
  buttonWrap: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    
  },
});

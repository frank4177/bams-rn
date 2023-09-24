import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import BackButton from '../../components/Buttons/BackButton';
import ProductCarousel from '../../components/Carousels/ProductCarousel';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';
import Accordion from '../../components/Accordion';
import {accordionData} from '../../utils/constants';
import ButtonType1 from '../../components/Buttons/ButtonType1';

export default function ProductDetailScreen() {
  const [isExpanded, setIsExpanded] = useState(10);

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,libero!';
  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <BackButton />
        <ProductCarousel />

        {/* DESCRIPTION */}
        <View>
          {/* Title */}
          <View style={styles.titleWrap}>
            <Text style={styles.title}>African Donut Mix (Puff Puff)</Text>
            <Text style={styles.price}>$34</Text>
          </View>

          {/* About Product */}
          <Text style={styles.desc}>
            {text.split(' ').slice(0, isExpanded).join(' ')}
            <Text>
              {isExpanded <= 10 ? <Text>...</Text> : null}
              {isExpanded <= 10 ? (
                <Text
                  style={styles.show}
                  onPress={() => setIsExpanded(text.length - 1)}>
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

        {/* BUTTONS */}
        <View style={styles.buttonWrap}>
          <ButtonType1 title="Add to cart"/>
          <ButtonType1
            backgroundColor="white"
            color={`${colors.red}`}
            title="Subscribe to a Plan"
          />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = ScaledSheet.create({
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
});

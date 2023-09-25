import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {menus} from '../../../utils/constants';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/theme';
import image from "../../../assets/Images/stew.png"

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function ProductCarousel({data}) {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={({item, index}) => (
            <ProductImageCard item={item} key={index}/>
          )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        // useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
        //   backgroundColor: colors.red,
        }}
        dotColor={`${colors.red}`}
        inactiveDotColor='gray'
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

export const ProductImageCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image
        source={item ? item.img : image}
        style={styles.img}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  card: {
    height: '266@s',
    width: '227@s',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  img: {
    height: '150@s',
    width: '175@s',
  },
});

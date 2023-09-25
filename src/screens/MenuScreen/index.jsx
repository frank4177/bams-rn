import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import {colors} from '../../utils/theme';
import {ScaledSheet} from 'react-native-size-matters';
import SearchBar from '../../components/SearchBar';
import MenuCard from '../../components/Cards/MenuCard';
import {menus} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

export default function MenuScreen() {
  return (
    <SafeAreaWrapper>
      <FlatList
        data={menus}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Menu</Text>
            </View>
            <View style={styles.padding}>
              <SearchBar />
            </View>
          </View>
        )}
        renderItem={({item}) => {
          return <MenuCard item={item} />;
        }}
      />
    </SafeAreaWrapper>
  );
}

const styles = ScaledSheet.create({
  listContainer: {
    justifyContent: 'center',
    backgroundColor:"whitesmoke",
    paddingBottom:10,
    gap:10
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
    fontSize: '20@s',
  },
  padding:{
    paddingHorizontal: "12@s",
    marginVertical:"15@s"
  }
});

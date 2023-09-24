import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import {colors} from '../../utils/theme';
import {ScaledSheet} from 'react-native-size-matters';
import SearchBar from '../../components/SearchBar';
import MenuCard from '../../components/Cards/MenuCard';
import {menus} from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaWrapper>
        <FlatList
          data={menus}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          // windowSize={10}
          numColumns={2}
          columnWrapperStyle={styles.listContainer}
          ListHeaderComponent={() => (
            <View >
              <View style={styles.titleWrap}>
                <Text
                  style={styles.title}>
                  Menu
                </Text>
              </View>
              <SearchBar />
            </View>
          )}
          // getItemLayout={getItemLayout}
          // ListEmptyComponent={<EmptyList message="No Expense found :(" />}
          renderItem={({item}) => {
            return <MenuCard item={item} />;
          }}
        />
  
    </SafeAreaWrapper>
  );
}

const styles = ScaledSheet.create({
  listContainer:{
    justifyContent:"center",
  },
  titleWrap: {
    height: '60@s',
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
  }
});

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import arrowDow from '../../assets/icons/arrowDown.png';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme';

export default function Accordion({data}) {
  const [selected, setSelected] = useState();


//   HANDLE ACCORDION SELECT FUNCTION
  const handleSelect = param => {
    if (selected === param?.id) {
      setSelected();
    } else {
      setSelected(param.id);
    }
  };

  return (
    <View>
      {data?.map(item => (
        <View style={styles.container} key={item.id}>
          <TouchableOpacity
            style={styles.titleWrap}
            onPress={() => handleSelect(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={require('../../assets/icons/arrowDown.png')} />
          </TouchableOpacity>
          {selected === item.id ? (
            <View style={{lineHeight: 25}}>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    minHeight: '48@s',
    marginHorizontal: 7,
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '48@s',
  },
  title: {
    fontSize: '15@s',
    fontWeight: '600',
    color: colors.text,
  },
  desc: {
    fontSize: '14@s',
    color: colors.text,
    lineHeight:25,
    marginBottom:10
  },
});

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import {Image, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import {View} from 'react-native';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const cartItems = useSelector((state) => state?.cart?.products);
  // console.log(cartItems)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: scale(60),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/house.png')}
              style={{
                tintColor: focused ? '#FF3A44' : 'gray',
                width: scale(20),
                height: scale(19),
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF3A44' : 'gray',
                fontSize: scale(15),
              }}>
              Home
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/grid.png')}
              style={{
                tintColor: focused ? '#FF3A44' : 'gray',
                width: scale(20),
                height: scale(19),
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF3A44' : 'gray',
                fontSize: scale(15),
              }}>
              Menu
            </Text>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <View style={{position: 'relative'}}>
              {cartItems?.length > 0 ?<View
                style={{
                  height: scale(23),
                  width: scale(23),
                  borderRadius: 100,
                  backgroundColor: 'orangered',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position:"absolute",
                  left:10,
                  bottom:6,
                  zIndex:1
                }}>
                <Text style={{fontWeight: 700, color: 'white'}}>{cartItems?.length}</Text>
              </View>: null}
              <Image
                source={require('../assets/icons/bag.png')}
                style={{
                  tintColor: focused ? '#FF3A44' : 'gray',
                  width: scale(20),
                  height: scale(19),
                }}
              />
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF3A44' : 'gray',
                fontSize: scale(15),
              }}>
              Cart
            </Text>
          ),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Account"
        component={CartScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/Images/duck.jpg')}
              style={{
                borderWidth: 2,
                borderRadius: 15,
                borderColor: focused ? '#FF3A44' : 'gray',
                width: scale(24),
                height: scale(23),
                objectFit: 'contain',
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF3A44' : 'gray',
                fontSize: scale(15),
              }}>
              Account
            </Text>
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

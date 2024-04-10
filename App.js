import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import OnBoardingScreen from './Screens/OnBoardingScreen';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Favorites from './Screens/Favorites';
import Account from './Screens/Accounts/Account';
import CoffeeDetail from './Screens/CoffeeDetail';
import SearchScreen from './Screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [loaded] = useFonts({
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    poppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const checkLoginStatus = async () => {
    const value = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(value === 'true');
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (!loaded || isLoggedIn === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
              name="Login"
              component={ Login }
              options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Dashboard"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="CoffeeScreen">
      <Stack.Screen name="CoffeeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CoffeeDetailScreen" component={CoffeeDetail} options={{ headerShown: false }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      <Stack.Screen name="CoffeeDetail" component={CoffeeDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Coffee') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'coffee' : 'coffee-outline'}
                size={24}
                color={color}
              />
            );
          } else if (route.name === 'Favorites') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color={color}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                size={26}
                color={color}
              />
            );
          }
        },
        tabBarLabel: '',
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#402E32',
        tabBarCentered: true,
        tabBarStyle: {
          backgroundColor: "#FFC20F",
          height: 56,
          padding: 10,
        }
      })}
    >
      <Tab.Screen
        name="Coffees"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
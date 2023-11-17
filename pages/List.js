import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CryptoList from './CryptoList'
// import CryptoDetail from './CryptoDetail';
import ListComponent from '../components/List/ListComponent';
import ItemDetail from '../components/List/ItemDetail';
const Stack = createNativeStackNavigator();
const List = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListComponent" component={ListComponent} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default List;
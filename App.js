import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Header from './components/Header';
import Home from './pages/Home'
import List from './pages/List';
import Signal from './pages/Signal';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={'Signals'} />
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Signal' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color,size}) => (
                <FontAwesome5 name="home" color={'#001b2d'} size={16} />
            )}} />
            <Tab.Screen name="List" component={List} options={{ tabBarIcon: ({color,size}) => (
                <FontAwesome5 name="coins" color={'#001b2d'} size={16} />
                )}} />
              <Tab.Screen name="Signal" component={Signal} options={{ tabBarIcon: ({color,size}) => (
                <FontAwesome5 name="coins" color={'#001b2d'} size={16} />
                )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

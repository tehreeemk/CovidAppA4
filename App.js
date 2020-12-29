import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Button  } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {   createDrawerNavigator} from '@react-navigation/drawer';

import WorldStatisticsScreen from './screens/WorldStatisticsScreen';
import CountriesStatisticsScreen from './screens/CountriesStatisticsScreen';
import FavCountriesScreen from './screens/FavCountriesScreen';
import Welcome from './screens/Welcome';
import CountriesList from './screens/CountriesList';

import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function WorldStackNav () {
  return (
      <Stack.Navigator
        screenOptions={ ({navigation}) => ({
          title: 'World Stats',
        headerTintColor: 'black',
        headerTitleAlign: 'center', 
        headerLeft: () => <TouchableOpacity onPress ={() => navigation.openDrawer()} >
          <EvilIcons name="navicon" size={30} color="gray" style = {{marginLeft: 10}} />
        </TouchableOpacity>
      })}
      >
        <Stack.Screen name = "World Stats" component ={WorldStatisticsScreen} />
    </Stack.Navigator>
  )
}

function CountriesStackNav () {
  return (
      <Stack.Navigator initialRouteName= 'Countries List'
        screenOptions={ ({navigation}) => ({
          title: 'Countries List',
          headerTintColor: 'black',
          headerTitleAlign: 'center'
      })}
      >
        <Stack.Screen 
          options={ ({navigation}) => ({ 
            headerLeft: () => <EvilIcons 
            name="navicon" 
            size={30} 
            color="gray" 
            style = {{marginLeft: 10}}
            onPress ={() => navigation.openDrawer()} />
           
        })}
        name = "Countries List" 
        component ={CountriesList} />
        <Stack.Screen 
        options = {{
          title: 'Country Stats'
        }}
        name = "Country Stats" component={CountriesStatisticsScreen} />
    </Stack.Navigator>
  )
}

function FavCountriesNav () {
  return (
      <Stack.Navigator
        screenOptions={ ({navigation}) => ({
          title: 'Favourite Countries',
          headerTintColor: 'black',
          headerTitleAlign: 'center',
      })}
      >
        <Stack.Screen 
        options={ ({navigation}) => ({ 
          headerLeft: () => <EvilIcons 
          name="navicon" 
          size={30} 
          color="gray" 
          style = {{marginLeft: 10}}
          onPress ={() => navigation.openDrawer()} />
         
      })}
        name = "Favourite Countries" 
        component ={FavCountriesScreen} />
        <Stack.Screen 
         options = {{
          title: 'Country Stats'
        }}
        name = "Country Stats" component={CountriesStatisticsScreen} />
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#A41C0C',
    }}
    >
      <Drawer.Screen 
      options ={{
        drawerIcon: () => <Fontisto name="world-o" size={24} color="gray" />
      }}
      name = "World Stats" 
      component = {WorldStackNav}/>
      <Drawer.Screen 
      options ={{
        title: 'Countries List',
        drawerIcon: () => <Fontisto name="flag" size={24} color="gray" />
      }}
      name = "Countires List Stack" 
      component ={CountriesStackNav} />
      <Drawer.Screen 
      options = {{
        title: 'Favorites',
        drawerIcon: () => <Fontisto name="star" size={20} color="gray" />
      }}
      name = "Favourite Countries Stack" 
      component = {FavCountriesNav} />
    </Drawer.Navigator> 
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={ {
          title: 'COVID-19 Stats',
        headerStyle: {
          backgroundColor: "#A41C0C",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center', }}
      >
        <Stack.Screen name = 'Welcome' component = {Welcome} />
        <Stack.Screen name = 'Drawer' component = {MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



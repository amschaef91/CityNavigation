import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const art = require('./Images/art.png');
const mile = require('./Images/mile.png');
const pier = require('./Images/pier.png');
const water = require('./Images/water.png');
const willis = require('./Images/willis.png');

function Art() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={art} />
    </View>
  )
}

function Mile() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mile} />
    </View>
  )
}

function Pier() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pier} />
    </View>
  )
}

function Water() {
  return (
    <View style={styles.container}> 
      <Image style={styles.image} source={water} />
    </View>
  )
}

function Willis() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={willis} />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Mile} />
        <Drawer.Screen name="Navy Pier" component={Pier} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
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
  image: {
    height: 480,
    width: 320,
  }
});

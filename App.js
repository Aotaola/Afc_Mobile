import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';
import Home from './components/home';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Image source={require('./assets/AFC-logo.png')} style={styles.logo} />
        </View>

        <View style={styles.divider} />
        <View style= {styles.homeContainer}>
         <Home/>
        </View>
        <StatusBar style="auto" />
        <View style={styles.footer}>
        <View style={styles.divider} />
          <Text style={styles.footerText}>American Family Care </Text>
          <Text style={styles.footerText}> Built by Alejandro Otaola </Text>
          <View style={styles.footerButtons}>
          </View>
        </View>
      </View>
   </View>
);
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    postion: 'absolute',
    width: 80,  // or whatever size you want
    height: 80, // or whatever size you want
    resizeMode: 'contain', // or 'cover' or 'stretch'
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    height: '100%',
    width: '100%', // This will constrain the content to 80% of the screen width
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,  // This defines the thickness of the divider
    width: '100%',  // This makes the divider span the full width of its container
    backgroundColor: '#E0E0E0',  // This is a light gray color for the divider
    marginVertical: 10,  // This adds some vertical margin above and below the divider for spacing
  },
  headerText: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // item: {
  //   backgroundColor: 'white',
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  //   borderBottomColor: 'blue',
  //   borderBottomWidth: 1,
  // },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#red',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText: {
    fontSize: 16,
    color: '#white'
  },
  // footerButtons: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: 150,
  // },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenWrapper from './components/HomeScreenWrapper';
import Location from './components/Location';
import Schedule from './components/Schedule';

const Stack = createStackNavigator();


export default function App() {
  return (
    
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.header}>
            <Image source={require('./assets/AFC-logo.png')} style={styles.logo} />
          </View>

          <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreenWrapper} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Schedule" component={Schedule} />
          </Stack.Navigator>
        </NavigationContainer>

          {/* Buttons to navigate */}
          {/* <View style={styles.navigationButtons}>
            <Link to="/schedule" component={Button} title="Go to Schedule" />
            <Link to="/location" component={Button} title="Go to Location" />
          </View> */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>American Family Care</Text>
            <Text style={styles.footerText}>Built by Alejandro Otaola</Text>
          </View>
        </View>
      </View>
    
  );}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Helvetica Neue',
    padding: 20,
    paddingTop: 40,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    paddingLeft: 20,
    width: 80,  // or whatever size you want
    height: 80, // or whatever size you want
    resizeMode: 'contain', // or 'cover' or 'stretch'
  },
  
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    width: '100%', // This will constrain the content to 80% of the screen width
  },
  header: {
    paddingLeft: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,  
    width: '80%',  
    backgroundColor: '#E0E0E0',  
    marginVertical: 10,  
  },
  headerText: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopWidth: .5,
    borderBlockColor: 'grey',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    color: 'black'
  },
  navigationButtons: {
    flexDirection: 'column', // stack buttons vertically
    alignItems: 'center',
    marginVertical: 10, // some spacing between buttons and the surrounding content
  },
});

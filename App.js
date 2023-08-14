import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Image source={require('./assets/AFC-logo.png')} style={styles.logo} />
          <Button title="Profile" onPress={() => {}} />
        </View>

        <View style={styles.locationSection}>
          <Text>Your Location: [Location Here]</Text>
          <Button title="Update Location" onPress={() => {}} />
        </View>

        <TextInput style={styles.searchBar} placeholder="Search for a professional..." />

        <FlatList
          data={[{key: 'Dr. Smith'}, {key: 'Dr. Jane'}, {key: 'Dr. Doe'}]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <View style={styles.divider} />


        <StatusBar style="auto" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>American Family Care </Text>
          <Text style={styles.footerText}> Built by Alejandro Otaola </Text>
          <View style={styles.footerButtons}>
            <Button title="Settings" onPress={() => {}} color="#6c757d" />
            <Button title="Help" onPress={() => {}} color="#6c757d" />
          </View>
        </View>
      </View>
   </View>
);
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    postion: 'center',
    width: 80,  // or whatever size you want
    height: 80, // or whatever size you want
    resizeMode: 'contain', // or 'cover' or 'stretch'

  },
  contentWrapper: {
    height: '85%',
    width: '80%', // This will constrain the content to 80% of the screen width
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationSection: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  footer: {
    borderWidth: '1px',
    borderColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    borderWidth: '1px',
    borderColor: 'white',
    fontSize: 16,
    color: '#6c757d',
  },
  footerButtons: {
    borderWidth: '1px',
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});

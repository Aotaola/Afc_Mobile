import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>American Family Care</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
        
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'Helvetica Neue',
        
    }
});

export default Home;

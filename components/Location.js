import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Location = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const fetchLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation(position);
                setError(null);
            },
            (error) => {
                setError(error.message);
                setLocation(null);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <>
                    <Text>Latitude: {location.coords.latitude}</Text>
                    <Text>Longitude: {location.coords.longitude}</Text>
                </>
            ) : (
                <Text>Fetching location...</Text>
            )}
            {error && <Text>Error: {error}</Text>}
            <Button title="Refresh Location" onPress={fetchLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default Location;

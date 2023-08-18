import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [date]);

    const fetchData = async () => {
        try {
            // Adjust this URL to wherever your file is hosted
            const response = await axios.get('https://example.com/path/to/your/file.json?date=' + date.toISOString());
            setData(response.data);
        } catch (error) {
            console.error("There was an error fetching the data", error);
        }
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title="Select Date" onPress={() => setShowPicker(true)} />
            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    display="default"
                    onChange={onChange}
                />
            )}

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>Patient Name: {item.patientName}</Text>
                        <Text>Appointment Time: {item.appointmentTime}</Text>
                        // Render other details here
                    </View>
                )}
            />
        </View>
    );
};

export default Schedule;

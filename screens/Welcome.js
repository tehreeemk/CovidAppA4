import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Welcome = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.welcome}>Welcome to COVID-19 App</Text>
            <Ionicons 
            name="return-down-forward-sharp" 
            size={40} 
            color="#A41C0C"
            onPress= {() => navigation.navigate('Drawer')} />
 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        color: '#A41C0C',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'center',
        marginHorizontal: 10
        
    }
})

export default Welcome

import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0FE6E',
    },
});

export default function WelcomePage ({navigation}) {
    const [text, onChangeText] = React.useState('15 mins')
    return (
        <View style = {styles.container}>
            <Text> How long did you shower today? </Text>
            <TextInput onChangeText = {onChangeText} value = {text}/> 
        </View>
    )
}

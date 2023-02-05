import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function HomeEnergyQ1 ({navigation}) {
    const [text, onChangeText] = React.useState('Enter')
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Did you use your dishwasher today? </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Yes, Many Loads </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Yes, 1 Full Load </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Yes, 1 Not Full Load </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> No </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("WasteQ4")}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>

            
        </View>
    )
}


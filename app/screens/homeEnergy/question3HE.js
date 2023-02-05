import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function HomeEnergyQ3 ({navigation}) {
    const [text, onChangeText] = React.useState('Enter')
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Did you use your clothes dryer today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Many Loads </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 1 Full Load </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Partial Load </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> No </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Home Energy Question 4")}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


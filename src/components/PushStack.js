import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default props => (

    <TouchableOpacity style={Styles.button} title={props.title} onPress={() => props.navigation.push(props.component)}>
        <Text style={Styles.buttonText}> {props.title} </Text>
    </TouchableOpacity>
)

const Styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: 'blue'
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
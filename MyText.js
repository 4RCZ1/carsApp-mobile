import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function MyText(props){
    return(
        <Text style={styles.text}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize:16,
        color: 'rgb(55, 71, 79)'
    },
})

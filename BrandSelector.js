import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";

export default function BrandSelector({setUrl}){
    const url ='https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/';
    const setBrandUrl = (brand) => {
        setUrl(url+brand+'?format=json');
    }
    return (
        <View style={styles.brandInput}>
            <TextInput placeholder="Brand" onChangeText={text => setBrandUrl(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    brandInput: {
        flex:0.5,
        paddingLeft: 5,
        backgroundColor: "#fff",
        borderRadius: 7,
        marginRight: 5,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#d9d9d9",
        color: 'rgb(55, 71, 79)'
        //flexDirection:'row',
    },
});

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyText from "./MyText";

export default function ({cars,loading,show}){

    if(loading){
        return <Text>Loading ...</Text>
    }

    if(cars.length===0 && show){
        return <Text>No cars of this brand found :(</Text>
    }

    if(show) {
        return (
            <View>
                    {cars.map((car) => {
                        const {Model_ID,Make_Name, Model_Name} = car

                        return (
                            <View key={Model_ID} style={styles.car}>
                                <Text style={{fontSize:15, fontWeight:'bold',color: 'rgb(55, 71, 79)'}}>{Make_Name}</Text>
                                <Text style={{color: 'rgb(55, 71, 79)',}}>Model: {Model_Name}</Text>
                            </View>
                        )
                    })}
            </View>
        )
    }

    return (
    <View style={{flex:1}}>
        <MyText>Enter the brand of your choice in the 'brand' field and click the 'show cars' button to see the cars of the selected brand. Default brand is Honda </MyText>
    </View>
    )
}

const styles = StyleSheet.create({
    car: {
        padding: 8,
        borderRadius: 6,
        height: 65,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex:1,
    },
});

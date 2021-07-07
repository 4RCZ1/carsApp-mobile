import React,{useState} from 'react';
import {TextInput, View, Text, StyleSheet} from "react-native";
import MyText from "./MyText";

export default function perPage({setPerPage}){
    const [isNumber, setIsNumber] = useState(true);

    function numberCorrection (number) {
        setIsNumber(!isNaN(number));
        if(isNumber) {
            setPerPage(number)
        }
    }

    return (
        <View style={styles.perPage}>
            <View style={{marginHorizontal: 3,}}>
                <MyText>
                    <Text style={{fontSize: 14}}>Cars per page: </Text>
                </MyText>
            </View>
            <TextInput keyboardType={'number-pad'} style={styles.perPageInput} placeholder={'10'} onChangeText={text => numberCorrection(text)}/>
        </View>
        )

}
const styles = StyleSheet.create({
    perPage: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderRadius: 7,
        flexDirection:'row',
        borderWidth: 2,
        borderColor: "#d9d9d9",
        alignItems: 'center',
    },
    perPageInput: {
        paddingLeft:0,
        color: 'rgb(55, 71, 79)',
        flex:1,
        height:21,
    }
});

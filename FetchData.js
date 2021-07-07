import React,{useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BrandSelector from "./BrandSelector";
import PerPage from "./PerPage";
import MyText from "./MyText";

export default function FetchData({setCars,setLoading,perPage,setPerPage,setCurrentPage,setShowingCars}){
    const [url, setUrl] = useState('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')

    const getCars = async ()=>{
        //setShowingCars(false);
        setLoading(true);
        setCurrentPage(1);
        const response = await fetch(url);
        const cars = await response.json();
        setCars(cars.Results);
        setLoading(false);
        setShowingCars(true);
    }

    return (
        <View>
            <View style={styles.selectors}>
                <BrandSelector setUrl={setUrl}/>
                <PerPage perPage={perPage} setPerPage={setPerPage}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={getCars}>
                <MyText>Show Cars</MyText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    selectors:{
        flexDirection: 'row',
        height:40,
        flex:1,
    },
    button: {
        borderRadius: 5,
        flex:1,
        height: 45,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#00b8ff',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

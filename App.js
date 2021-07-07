import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import FetchData from "./FetchData";
import MyText from "./MyText";
import Pagination from "./Pagination";
import Cars from "./Cars";


export default function App() {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [showingCars, setShowingCars] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [url, setUrl] = useState('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/opel?format=json');

  const paginate = (pageNumber) => {
    if(pageNumber>0 && pageNumber<Math.ceil(cars.length/perPage)+1) {
      setCurrentPage(pageNumber);
    }
  }

  const indexOfLastCar = currentPage * perPage;
  const indexOfFirstCar = indexOfLastCar-perPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: useWindowDimensions().width}}>
        <View style={{alignItems: 'center',}}>
          <View style={{width: useWindowDimensions().width*0.9}}>

            <View style={styles.titleView}>
              <MyText>
                <Text style={styles.title}>Cars</Text>
              </MyText>
            </View>
            <FetchData setCars={setCars} setLoading={setLoading} perPage={setPerPage} setPerPage={setPerPage} setCurrentPage={setCurrentPage} setShowingCars={setShowingCars}/>
            <Cars cars={currentCars} loading={loading} show={showingCars}/>
            <Pagination perPage={perPage} totalCars={cars.length} paginate={paginate} show={showingCars} currentPage={currentPage}/>

          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  titleView:{
    paddingBottom: 14,
    marginBottom: 7,
    borderBottomWidth: 1,
    borderColor: "#9c9c9c",
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

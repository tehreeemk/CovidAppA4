import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';

import axios from "axios";

const CountriesStatisticsScreen = ({route, navigation}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [countryStats, setCountryStats] = useState([]);
    const [countryName, setCountryName] = useState('');

    const options = {
      method: 'GET',
      url: '',
      params: {name: ''},
      headers: {
        'x-rapidapi-key': 'b967676163msh7d0f7343920307cp1f2becjsn15653d2e49b4',
        'x-rapidapi-host': ''
      }
    };

        try {
          useEffect(()=>{
            if (route.params.name == "United States") {
              setCountryName('USA')
          }
          else {
              setCountryName(route.params.name)
          }
  
          }, [route.params.name]);
        } catch (error) {
          console.log(error);
        }


    useEffect(() => {

      axios.request({...options, url: 'https://covid-19-data.p.rapidapi.com/country', params:{name: route.params.name}, headers: {...options.headers, 'x-rapidapi-host': "covid-19-data.p.rapidapi.com"}}).then(function (response)
      { setCountryStats(...response.data)
            console.log(countryStats)
            // console.log('abcd')
            // console.log(...response.data)
        }).catch(function (error) {
            console.error(error);
        }).finally(() => setIsLoading(false));
    }, [])    

    return (
        <View style={styles.conatainer}>
        {isLoading? <ActivityIndicator color= "black" size="large" /> :
        <View style ={styles.details}>
            <Text style={styles.title} > {countryName}</Text>
            <Text style={styles.eachDetail}>Confirmed: {countryStats.confirmed}</Text>
            <Text style={styles.eachDetail}>Recovered: {countryStats.recovered}</Text>
            <Text style={styles.eachDetail}>Critical: {countryStats.critical}</Text>
            <Text style={styles.eachDetail}>Deaths: {countryStats.deaths}</Text>
            <Text style={styles.eachDetail}>Last Updated: {countryStats.lastUpdate}</Text>
        </View>
        }
      </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
    },
    title : {
      fontSize:30,
      textAlign: 'center',
      color: '#A41C0C',
      marginBottom: 5
    },
    eachDetail: {
      color: '#A41C0C',
      backgroundColor: '#F5E0DE',
      padding: 10,
      margin: 5,
      borderRadius: 7,
      fontSize: 19
    },
    details: {
      marginHorizontal: 30
    }
})
export default CountriesStatisticsScreen

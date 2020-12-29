import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



const worldOptions = {
  method: 'GET',
  url: 'https://world-population.p.rapidapi.com/worldpopulation',
  headers: {
    'x-rapidapi-key': 'b967676163msh7d0f7343920307cp1f2becjsn15653d2e49b4',
    'x-rapidapi-host': 'world-population.p.rapidapi.com'
  }
};

const covidOptions = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/totals',
  headers: {
    'x-rapidapi-key': 'b967676163msh7d0f7343920307cp1f2becjsn15653d2e49b4',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

const WorldStatisticsScreen = ({navigation}) => {
  const [worldPopulation, setWorldPopulation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [worldStats, setWorldStats] = useState([]);



  useEffect(() => {
    axios.request(worldOptions).then(function (response) {
      setWorldPopulation(response.data.body.world_population);
    }).then(() => {
      axios.request(covidOptions).then(function (response) {
        setWorldStats(...response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }).catch(function (error) {
      console.error(error);
    }).finally(() => setIsLoading(false));

  }, [])
    
    return (
        <View style={styles.conatainer}>
          {isLoading? <ActivityIndicator color= "black" size="large" /> :
          <View style ={styles.details}>
            <Text style={styles.total}>Total World Population: {worldPopulation}</Text>
            <Text style={styles.eachDetail}>Confirmed: {worldStats.confirmed}                        {((worldStats.confirmed / worldPopulation) * 100).toFixed(2)} %</Text>
            <Text style={styles.eachDetail}>Recovered: {worldStats.recovered}                        {((worldStats.recovered / worldPopulation) * 100).toFixed(2)} %</Text>
            
            <Text style={styles.eachDetail}>Critical: {worldStats.critical}                            {((worldStats.critical / worldPopulation) * 100).toFixed(5)} %</Text>
            <Text style={styles.eachDetail}>Deaths: {worldStats.deaths}                                {((worldStats.deaths / worldPopulation) * 100).toFixed(2)} %</Text>
            <Text style={styles.eachDetail}>Last Updated: {worldStats.lastUpdate}</Text>
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
    total : {
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

export default WorldStatisticsScreen

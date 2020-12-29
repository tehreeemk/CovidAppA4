import { NavigationHelpersContext } from '@react-navigation/native';
import React , {useState, useEffect}from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


const CountryNameOptions = {
    method: 'GET',
    url: 'https://world-population.p.rapidapi.com/allcountriesname',
    headers: {
      'x-rapidapi-key': 'b967676163msh7d0f7343920307cp1f2becjsn15653d2e49b4',
      'x-rapidapi-host': 'world-population.p.rapidapi.com'
    }
  };

const CountriesList = ({navigation}) => {
    const [countriesName, setCountriesName] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fav, setFav] = useState([]);

    // const test = ['a', 'b' ,'c', 'd']
    // test.push('g').toString()

    useEffect(() => {
        axios.request(CountryNameOptions).then(function (response) {
          setCountriesName(response.data.body.countries)
          // console.log(countriesName)
        }).catch(function (error) {
          console.error(error);
        }).finally(() => setIsLoading(false));
    
      }, [])

      const [ant, setAnt] = useState('staro')

      // //onPress = {() => setAnt('star')}

      //navigation.navigate('Nested Navigator 2', { screen: 'screen D' });

      const insertFav = (item) => {
        setFav([...fav, item]); 
        // fav.push(item).toString();
        setAnt('star');
      }

      // onPress ={()=> navigation.navigate('Favourite Countries Stack' , {screen: 'Favourite Countries'} , {params: {fav: item}})}
    return (
        <View style = {styles.container}>
          <Button color = '#A41C0C' title = 'add to favs' onPress ={() => navigation.navigate('Favourite Countries Stack' , { screen: 'Favourite Countries', params: {fav: fav, setFav: setFav}})}/>
            <FlatList
                data={countriesName}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <View style = {styles.row}>
                    <AntDesign name= 'star' size={28} color="lightgray" onPress = {() => insertFav(item)} />
                  <TouchableOpacity 
                  onPress ={() => navigation.navigate('Country Stats', {name: item}) }>
                    <Text style = {styles.eachDetail}>{item}</Text>
                  </TouchableOpacity>
                  </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
  conatainer: {
    flexDirection: 'column',
    flex: 1,
    
  },
  row:{
    flexDirection: 'row',
    margin: 10
   
  },
  eachDetail: {
    color: 'gray',
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 20
  },
})

export default CountriesList

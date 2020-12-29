import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const FavCountriesScreen = ({route, navigation}) => {

    const [favCountries, setFavCountries] = useState(route.params.fav);

    // onPress ={() => navigation.navigate('Country Stats' ,{name: item})}

    return (
        <View style={styles.conatainer}>
            {/* <Button title = 'open country stats'  /> */}
            <FlatList 
            data = {favCountries}
            keyExtractor={item => item}
            renderItem = { ({ item }) => (
                <View style = {styles.row}>
                    <AntDesign name= 'star' size={28} color="gold"/>
                <TouchableOpacity>
                <Text style = {styles.eachDetail}>{item}</Text>
                </TouchableOpacity>
                </View>
            )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    conatainer: {
        backgroundColor: "#fff",
        flex: 1
    },
    eachDetail: {
        color: 'gray',
        fontSize: 22,
        textAlign: 'center',
        marginLeft: 20
        },
    row:{
        flexDirection: 'row',
        margin: 10
           
          }
})

export default FavCountriesScreen

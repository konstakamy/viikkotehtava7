
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image } from 'react-native';



// const api = {
//     url: 'https://api.openweathermap.org/data/2.5/weather?',
//     key: '8779553128cf8c097f1f02ffdb69b053',
//     icons: 'https://openweathermap.org/img/wn/'
// }


// export default function Weather(props) {

//     const [temp, setTemp] = useState(0);
//     const [desc, setDesc] = useState('')
//     const [icon, setIcon] = useState('')

//     useEffect(() => {
//         const url = api.url +
//         'lat=' + props.latitude +
//         '&lon=' + props.longitude +
//         '&units=metric' +
//         '&appid=' + api.key +

//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             setTemp(json.data.main.temp);
//             setDesc(json.weather[0].description);
//             setIcon(api.icons + json.weather[0].icon + '@2x.png')
//         })
//         .catch(error => {
//             setDesc('error retrieving weather');
//             console.log(error);
//         })
//     }, [])

//     return (
//         <View>
//         <Text style={styles.temp}>{temp}</Text>
//         {icon &&
//          <Image source={{uri: icon}} style={{width: 100,height: 100}} />
//          }
//          <Text>{description}</Text>
//         </View>
//     )
// }

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Weather = (props) => {
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const api = {
            url: process.env.EXPO_PUBLIC_API_URL,
            key: process.env.EXPO_PUBLIC_API_KEY,
            icons: process.env.EXPO_PUBLIC_ICONS_URL
        };

        const url = api.url +
            'lat=' + props.latitude +
            '&lon=' + props.longitude +
            '&units=metric' +
            '&appid=' + api.key;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setTemp(data.main.temp);
            setDesc(data.weather[0].description);
            setIcon(api.icons + data.weather[0].icon + '@2x.png');
        })
        .catch(error => {
            setDesc('error retrieving weather');
            console.log(error);
        })
    }, [])

    const styles = StyleSheet.create({
        temp: {
            fontSize: 18,
            marginBottom: 10,
        }
    });

    return (
        <View>
            <Text style={styles.temp}>{temp}</Text>
            {icon &&
                <Image source={{uri: icon}} style={{width: 100, height: 100}} />
            }
            <Text>{desc}</Text>
        </View>
    )
}

export default Weather;
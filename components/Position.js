

// import * as Location from 'expo-location';
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Weather from './Weather';

// const Position = () => {
//     const [latitude, setLatitude] = useState(0);
//     const [longitude, setLongitude] = useState(0);
//     const [message, setMessage] = useState("retrieving location");
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             console.log(status);
//             try {
//             if (status !== 'granted') {
//                 setMessage('Permission to access location was denied');
            
//             } else {
//                 const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
//                 setLatitude(position.coords.latitude);
//                 setLongitude(position.coords.longitude);
//                 setMessage('Location retrieved');
//             }
//             }
//             catch (error) {
//                 setMessage('error retrieving location');
//                 console.log(error);
//             }

//             setIsLoading(false);
//         })()

//     }, [])

//     return (
//         <View style={styles.container}>
//             <Text style={styles.coords}>{latitude.toFixed(3)},{longitude.toFixed(3)}</Text>
//             <Text style={styles.message}>{message}</Text>
//             {isLoading === false && 
//             <Weather latitude={latitude} longitude={longitude} />
            
//             }
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//     },
//     coords: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     message: {
//         fontSize: 16,
//     }
// });

// export default Position;

import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './Weather';

const Position = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [message, setMessage] = useState("retrieving location");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            try {
                if (status !== 'granted') {
                    setMessage('Permission to access location was denied');
                
                } else {
                    const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setMessage('Location retrieved');
                }
            }
            catch (error) {
                setMessage('error retrieving location');
                console.log(error);
            }

            setIsLoading(false);
        })()

    }, [])

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        coords: {
            fontSize: 18,
            marginBottom: 10,
        },
        message: {
            fontSize: 16,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.coords}>{latitude.toFixed(3)},{longitude.toFixed(3)}</Text>
            <Text style={styles.message}>{message}</Text>
            {isLoading === false && 
                <Weather latitude={latitude} longitude={longitude} />
            }
        </View>
    )
}

export default Position;
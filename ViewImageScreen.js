import React from 'react';
import {Image,StyleSheet,View} from 'react-native';

import  colors  from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeicon}></View>
            <View style={styles.deleteicon}></View>

            <Image 
            resizeMode="contain"
            style={styles.image1}
            source={require('../assets/SONATA-hero-option1-764A5360-edit-640x354.jpg')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    closeicon:
    {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top:19,
        left: 0
    },
    container:
    {
        backgroundColor: "black",
        flex: 1
    },
    deleteicon:
    {
        width: 50,
        height: 50,
        backgroundColor: "green",
        position: "absolute",
        top:19,
        left: 50
    },
    image1:
    {
        width: '100%',
        width: '100%',
        justifyContent: "center",

    },
})
export default ViewImageScreen;
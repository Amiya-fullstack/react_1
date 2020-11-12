import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { render } from 'react-dom';
import {ImageBackground,StyleSheet,View,Image,Text,Button} from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import ViewImageScreen from './ViewImageScreen';

const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../assets/background.jpg')}>
            <View
            style= {styles.logocontainer}
            >

            <Image 
            style ={styles.logo}
            source={require('../assets/logo.jpg')}
            />
            <Text>Sell and Buy what you want</Text>

            </View>
            <Button
            onPress={()=>  navigation.navigate('View')}
            style={styles.loginButton}
            title="View"
            >

            </Button>
            <View
            //style={styles.registerButton}
            >

            </View>

        </ImageBackground>
    );
}

  
 const styles = StyleSheet.create({
     background:{
     flex: 1,
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     },
     loginButton : {
         height: 70,
         width: '100%',
         backgroundColor : '#fc5c65',
         //justifyContent: "flex-end",

     },
     registerButton : {
         height: 70,
         width: '100%',
         backgroundColor : '#4ecdc4',
         //justifyContent: "flex-end",

     },
     logo : {
         height: 100,
         width: 100,
         position: "absolute",
         top: 50,

     },
     logo : {
         height: 100,
         width: 100,
         position: "absolute",
         top: 30,
         left: 30,
         
        },
    logocontainer : {
        position: "absolute",
        top: 50,
        alignItems: "center",
        },
 })

export default WelcomeScreen;
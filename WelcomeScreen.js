import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { render } from 'react-dom';
import {ImageBackground,StyleSheet,View,Image,Text,Button, SafeAreaView} from 'react-native';
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
            style={styles.viewButton}
            title="View"
            />
            <Button 
            title="login"
            style={stlyles2.loginButton}
            />
            <Button 
            title="new register"
            style={stlyles2.registerButton}
            />

        </ImageBackground>
    );
}

  
 const styles = StyleSheet.create({
     background:{
     flex: 1,
     flexDirection: "row",
     justifyContent:"space-evenly",
     alignItems : "center",
     
     },
     viewButton : {
         height: 20,
         width: 20,
         backgroundColor : '#fc5c65',
         alignItems : "center",
         flexDirection :"column",
         color:"yellow",


     },
     logo : {
         height: 100,
         width: 100,
         position: "absolute",
         top: 50,

     },
    logocontainer : {
        position: "absolute",
        top: 30,
        left: 120,
        alignItems: "center",
        },
    
 })
const stlyles2 = StyleSheet.create({
    loginButton : {
        position: "relative",
        justifyContent:"space-evenly",
        height: 50 ,
        width: 50,
        bottom:10,
        },
    registerButton : {
        position: "relative",
        justifyContent:"space-evenly",
        height: 50 ,
        width: 50,
        bottom:10,
        },
})
export default WelcomeScreen;

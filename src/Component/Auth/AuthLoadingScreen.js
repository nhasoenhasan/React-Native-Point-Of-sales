import React,{useState,useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Splashanimation from '../../Assets/Images/splashanimation.gif';
import logo from '../../Assets/Images/CoffeMountain.png'

export default function AuthLoadingScreen(props) {
    

    useEffect(() => {
        AsyncStorage.getItem('xaccess-token', () => {})
        .then((token) => {
            if (token !== null){
                props.navigation.navigate('NavigatorDashboard')}
            else{
                props.navigation.navigate('NavigatorHome')}
        });
    });

    return (
        <View style={{alignItems:'center',padding:'35%'}}>
          <ActivityIndicator />
          <Image source={logo} alt='coffe mountain'/>
          <StatusBar backgroundColor="#e0245e"  barStyle="light-content" />
        </View>
    );
} 
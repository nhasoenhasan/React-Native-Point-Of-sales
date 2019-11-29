import React,{useState,useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Splashanimation from '../../Assets/Images/splashanimation.gif';

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
        <View>
          <ActivityIndicator />
          <Image source={Splashanimation}/>
          <StatusBar barStyle="default" />
        </View>
    );
} 
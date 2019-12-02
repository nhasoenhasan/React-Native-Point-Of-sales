import React,{useState,useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch  } from 'react-redux';
import logo from '../../Assets/Images/CoffeMountain.png';
import {setToken} from '../Public/Redux/Actions/auth';

export default function AuthLoadingScreen(props) {
    const dispatch = useDispatch()
    const setTokenredux=async(token)=>{
        await dispatch(setToken(token))
    }

    useEffect(() => {
        AsyncStorage.getItem('xaccess-token', () => {})
        .then((token) => {
            if (token !== null){
                setTokenredux(token)}
            else{
                props.navigation.navigate('NavigatorHome')}
        });
    },[]);

    
    useEffect(() => {
        AsyncStorage.getItem('xaccess-token', () => {})
        .then((token) => {
            if (token !== null){
                props.navigation.navigate('NavigatorDashboard')}
            else{
                props.navigation.navigate('NavigatorHome')}
        });
    },[]);

    

    return (
        <View style={{alignItems:'center',padding:'35%'}}>
          <ActivityIndicator />
          <Image source={logo} alt='coffe mountain'/>
          <StatusBar backgroundColor="#e0245e"  barStyle="light-content" />
        </View>
    );
} 
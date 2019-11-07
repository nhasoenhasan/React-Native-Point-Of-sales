import React, { useState,useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';


export default function Page1() {

	return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems:'center',
            backgroundColor:'black'
        }}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Page 1</Text>
        </View>	
	);
}

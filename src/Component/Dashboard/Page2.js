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
        }}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Page 2</Text>
        </View>	
	);
}

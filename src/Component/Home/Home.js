import React from 'react';
import styles from './Homestyle';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
} from 'react-native';

import { Button,Text,Thumbnail} from 'native-base';

export default function Home(props) {
	
	//AsyncStorage.getItem('xaccess-token', () => {}).then((token) => {if (token !== null) props.navigation.navigate('NavigatorDashboard');});

	return (
		
		<View style={styles.Layout}>
			<Thumbnail  source={{uri: 'http://lawlessjakarta.com/wp-content/uploads/2017/09/Lawless_burgerbar_header.gif'}} />
			<View style={{width: "70%", height: 150,alignItems:'center',justifyContent: 'center'}} >
			<Text style={{ fontWeight: "bold",fontSize: 30,color:'white'}}>Welcome To Point Of Sales Lawless</Text>
			</View>
				<Button 
					style={{
						width:"70%",
						justifyContent: 'center',
						backgroundColor:"#fbb130"
					}}
					title="Register"
					onPress={() =>
						props.navigation.navigate('Register')
					}
					rounded >
					<Text style={{
						fontWeight:"bold",fontSize: 20}} >Buat Akun</Text>
				</Button>
			<View style={{width: 50, height: 50}} />
			<View style={{width: "70%", height: 50,alignItems:'flex-start' }}>
				<Text style={{color:"white",justifyContent: 'flex-start'}}>Sudah Punya Akun?<Text style={{color:"#fbb130"}} onPress={() =>
						props.navigation.navigate('Login')
					}>Masuk</Text></Text>
			</View>
		</View>
	);
}

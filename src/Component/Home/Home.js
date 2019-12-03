import React from 'react';
import styles from './Homestyle';
import {
  View,
  StatusBar,
  Image
} from 'react-native';
import { Button,Text,Thumbnail} from 'native-base';
import Homegif from '../Assets/Images/Home.gif'

Home.navigationOptions={
    header: null
}

export default function Home(props) {

	return (
		
		<View style={styles.Layout}>
			<StatusBar backgroundColor="#e0245e"  barStyle="light-content" />
			
			<Thumbnail  source={Homegif} style={styles.gif}large /> 
			<View style={styles.layout2} >
			<Text style={styles.welcometext}>Welcome To Point Of Sales Coffe Mountain</Text>
			</View>
				<Button 
					style={styles.HomeButton}
					title="Register"
					onPress={() =>
						props.navigation.navigate('Register')
					}
					rounded >
					<Text style={styles.welcomebutton} >Create an account</Text>
				</Button>
			<View style={styles.bottomview} />
			<View style={styles.bottomview2}  >
				<Text style={styles.textalready}>Already have an account?<Text style={styles.textSignin} onPress={() =>
						props.navigation.navigate('Login')
					}>  Signin</Text></Text>
			</View>
		</View>
	);
}

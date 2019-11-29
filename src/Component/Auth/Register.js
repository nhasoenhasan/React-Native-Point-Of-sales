import React,{useState,useEffect}  from 'react';
import {postRegister} from '../Public/Redux/Actions/auth';
import {
  Text,
  View,
} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input,Toast } from 'native-base';
import { useDispatch } from "react-redux";

export default function Register(props) {
	const [input, setInput] = useState({ username: "", password: "" ,email:""});
	const dispatch = useDispatch();

	props.navigation.navigate({ routeName: 'NavigatorLogin', key:'Home'});
	//On Submit Login Data
	const handleSubmit = async (event) => {
		dispatch(postRegister (input))
		.then(response => {
		if (response.value.data.status === 200) {
			
			Toast.show({
				position: "top",
				duration: 3000,
				text: response.value.data.message,
				buttonText: 'Okay',
				type: "success"
			  })
			props.navigation.navigate('Login')
		} else {
			Toast.show({
				position: "top",
				text: response.value.data.message,
				duration: 3000,
				buttonText: 'Okay',
				type: "danger"
			  })
		}
		})
		.catch(error => alert(error));
	};

	return (

		<View style={{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems:'center',
			backgroundColor:'#15202b'
		}}>
			<View style={{width: 300, height: 50,justifyContent: 'center',marginStart:27,marginTop:10}} >
				<Text style={{fontWeight:"bold",color:'white',fontSize: 25}}>Make Account</Text>
			</View>
			<View style={{width: 300, height: 200}}>
				<Form>
					<Item style={{marginBottom:10,color:'white'}}>
						<Input placeholder="Email"
						 style={{color:'white'}}
						 onChangeText={(email) => setInput({...input, email: email })}/>
					</Item>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Username"
						style={{color:'white'}}
						onChangeText={(username) => setInput({...input, username: username })} />
					</Item>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Password"
						style={{color:'white'}}
						secureTextEntry={true}
						onChangeText={(password) => setInput({...input, password: password })} />
					</Item>
					
					<Button 
					style={{marginTop:20,width:150,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}} 
					onPress={handleSubmit}
					rounded>
						<Text style={{fontWeight:"bold",fontSize: 17,color:'white'}}>Register</Text>
					</Button>
					
				</Form>
			</View>
			<View style={{width: 300, height: 50, }}></View>
			<View style={{width: 300, height: 50, }}>
				
			</View>
			
		</View>
				
			
	);
}

import React,{useState,useEffect} from 'react';
import {postLogin} from '../Public/Redux/Actions/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text,
  View,
  Alert
} from 'react-native';
import { Button,Spinner, Content, Form, Item, Input,Toast } from 'native-base';
import { useDispatch,useSelector } from "react-redux";
import {setToken} from '../Public/Redux/Actions/auth';


const Login = (props) => {
    const [input, setInput] = useState({ username: "", password: "" ,token:""});
	const dispatch = useDispatch();
	const isLoading=useSelector(state=>state.auth.isLoading)

	//On Submit Login Data
	const handleSubmit = async (event) => {
		if(input.username===''||input.password===''){
			Alert.alert('Data Cant be empty')
		}else{
			dispatch(postLogin (input))
			.then(response => {
				if  ( response.value.data.status === 200) {
					Toast.show({
					position: "top",
					duration: 3000,
					text: response.value.data.message,
					buttonText: 'Okay',
					type: "success"
					})
					props.navigation.navigate('NavigatorDashboard')
					
				} else {
					Alert.alert(response.value.data.message)
				}
			})
			.catch(error => alert(error));
		}
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
				<Text style={{fontWeight:"bold",color:'white',fontSize: 25}}>Signin</Text>
			</View>
			<View style={{width: 300, height: 200}}>
				<Form>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Username"
						onChangeText={(username) => setInput({...input, username: username })}
						style={{color:"white"}}/>
					</Item>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Password" 
						secureTextEntry={true}
						onChangeText={(password) => setInput({...input, password: password })}
						value={input.password}
						style={{color:"white"}}/>
					</Item>
					
					<Button 
						style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						onPress={handleSubmit} rounded>
						{isLoading===true?<Spinner color='#15202b' />:<Text style={{fontWeight:"bold",fontSize: 17,color:'white'}}>Signin</Text>}	
					</Button>
					
					
				</Form>
			</View>
			<View style={{width: 300, height: 50, }}></View>
			<View style={{width: 300, height: 50, }}>
				
			</View>
			
		</View>
				
			
	);
}

export default Login;
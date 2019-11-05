import React from 'react';

import {
  Text,
  View,
   
} from 'react-native';

import { Button,Container, Header, Content, Form, Item, Input } from 'native-base';


export default function Register() {

	return (
					<View style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems:'center',
						backgroundColor:'black'
					}}>
						<View style={{width: 300, height: 50,justifyContent: 'center',marginStart:27,marginTop:10}} >
							<Text style={{fontWeight:"bold",color:'white',fontSize: 25}}>Make Account</Text>
						</View>
						<View style={{width: 300, height: 200}}>
							<Form>
								<Item style={{marginBottom:10,color:'white'}}>
									<Input placeholder="Email" />
								</Item>
								<Item style={{marginBottom:10}}>
									<Input placeholder="Username" />
								</Item>
								<Item style={{marginBottom:10}}>
									<Input placeholder="Password" />
								</Item>
								
								<Button style={{marginTop:20,width:150,marginStart:15,justifyContent: 'center',backgroundColor:"#fbb130"}} rounded>
									<Text style={{fontWeight:"bold",fontSize: 17}}>Register</Text>
								</Button>
								
							</Form>
						</View>
						<View style={{width: 300, height: 50, }}></View>
						<View style={{width: 300, height: 50, }}>
							
						</View>
						
					</View>
				
			
	);
}

import React, { useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
   
} from 'react-native';
import {getProduct} from '../Public/Redux/Actions/product';

import { Button,Container, Header, Content, Form, Item, Input } from 'native-base';


export default function Dashboard() {

	const initialFormState = { search: "",
                             sort: "",
                              order:"" };
	const [input, setInput] = useState(initialFormState);
	  
	const dispatch = useDispatch();
	const result = useSelector(state => state.productList);
	console.log("DATA PRODUCT =",result)

	const fetchddata=async()=>{
		await dispatch(getProduct ())
		.then(result => {
		  // console.log("Input",input)
		  // console.log("Hasil",result)
		})
		.catch(err => {
		  console.log(err);
		});
	  }
	
	  useEffect(()=>{
		fetchddata()
	  },[input])

	return (
					<View style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems:'center',
						backgroundColor:'black'
					}}>
						<View style={{width: 300, height: 50,justifyContent: 'center',marginStart:27,marginTop:10}} >
							<Text style={{fontWeight:"bold",color:'white',fontSize: 25}}>Dashboard Page</Text>
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

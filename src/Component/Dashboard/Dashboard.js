import React, { useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
   
} from 'react-native';
import {getProduct} from '../Public/Redux/Actions/product';
import Drawer from 'react-native-drawer'
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
	
	//   useEffect(()=>{
	// 	fetchddata()
	//   },[input])

	return (
					<View style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems:'center',
					}}>
						<View style={{width: 300, height: 50,justifyContent: 'center',marginStart:27,marginTop:10}} >
							<Text style={{fontWeight:"bold",fontSize: 25}}>Dashboard Page</Text>
						</View>
						
							
					</View>
				
			
	);
}

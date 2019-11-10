import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Picker,Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left,Button, Icon, Fab,Form,Item,Input,Textarea,Toast  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {patchProduct} from '../Public/Redux/Actions/product';

export default function Editproduct(props) {
    const [input, setInput] = useState({id_product:"",name: "", description: "",image: "",id_categories: "",price:"" ,quantity:"" });
    const [categories, setCategories]=useState({Categories:""})
    const {navigation}=props;
    const dispatch = useDispatch()
    const category = useSelector(state => state.categories.categoriesList)
    
    // console.log("DATA=",navigation.state.params.name)
    // console.log("ID=",navigation.state.params.id)

    const handleSubmit = async (event) => {
        console.log(input)
        dispatch(patchProduct (input))
        .then(response => {
        if (response.value.data.status === 200) {
            Toast.show({
				position: "top",
				duration: 3000,
				text: response.value.data.message,
				buttonText: 'Okay',
				type: "success"
			  })
            props.navigation.navigate('Product')
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

    useEffect(()=>{
        setInput(navigation.state.params.list);
    },[])
    // console.log("DATA PASING FROM PRODUCT",navigation.state.params.list)  
    console.log("DATA INPUT===>",input)
   
	return (
        <Container>
            <Content >
                <View style={{paddingTop:30,justifyContent: 'center'}}>
                    <Form>
                        <Item >
                            <Input placeholder="Insert Name...." 
                            onChangeText={(name) => setInput({...input, name: name })}
                            value={input.name}/>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Textarea placeholder="Insert Description" onChangeText={(description) => setInput({...input, description:description})} rowSpan={5} 
                            value={input.description}  />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input placeholder="Insert Url ...." 
                            onChangeText={(image) => setInput({...input, image: image })}
                            value={input.image}/>
                            <Input />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input placeholder="Insert Price ...." 
                            onChangeText={(price) => setInput({...input, price: price })}
                            value={input.price.toString()}/>
                            <Input />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Picker
                                selectedValue={input.id_categories}
                                style={{height: 50, width: 100}}
                                onValueChange={(itemValue, itemIndex) =>
                                    setInput({...input,id_categories: itemValue})
                                }>
                                {category.map(item=>{
                                    return(
                                        <Picker.Item label={item.Categories} value={item.id_categories} />
                                    )
                                })}
                            </Picker>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input placeholder="Insert Quantity ...." 
                            onChangeText={(quantity) => setInput({...input, quantity: quantity })}
                            value={input.quantity.toString()}/>
                            <Input />
                        </Item>
                        <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#fbb130"}}
						 onPress={handleSubmit} rounded>
						<Text style={{fontWeight:"bold",fontSize: 17}}>Add </Text>
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

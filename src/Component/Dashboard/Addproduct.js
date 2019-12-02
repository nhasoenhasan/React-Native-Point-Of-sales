import React, { useState} from 'react';
import {
  View,
  Alert
} from 'react-native';
import { Picker,Container, Content,Text,Button,Form,Item,Input,Textarea,Toast,Spinner  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {postProduct} from '../Public/Redux/Actions/product';

Addproduct.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Addproduct(props) {
    const [input, setInput] = useState({id_product:"",name: "", description: "",image: "",id_categories: "",price:"" ,quantity:"" });
    const dispatch = useDispatch()
    const isLoading=useSelector(state=>state.product.isLoading)

    const handleSubmit = async () => {
        if(input.name===''||input.description===''||input.image===''||input.id_categories===''||input.price===''||input.quantity===''){
            Alert.alert('Data Cant be Empty')
        }else{
            dispatch(postProduct (input))
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
        }
    };

    const category = useSelector(state => state.categories.categoriesList)
   
	return (
        <Container style={{backgroundColor: '#15202b'}}>
            <Content style={{paddingRight:'8%'}}>
                <View style={{paddingTop:30,justifyContent: 'center'}}>
                    <Form>
                        <Item >
                            <Input 
                                style={{color:'white'}}
                                placeholder="Insert Name...." 
                                placeholderTextColor="white" 
                                onChangeText={(name) => setInput({...input, name: name })}
                             />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Textarea 
                                style={{paddingTop:30,color:'white'}} 
                                placeholderTextColor="white" 
                                placeholder="Insert Description" 
                                onChangeText={(description) => setInput({...input, description:description})} 
                                rowSpan={3}   />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input 
                                style={{color:'white'}}
                                placeholder="Insert Url ...."  
                                placeholderTextColor="white"
                                onChangeText={(image) => setInput({...input, image: image })}/>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input
                                style={{color:'white'}} 
                                placeholder="Insert Price ...." 
                                placeholderTextColor="white"
                                keyboardType={'numeric'}  
                                onChangeText={(price) => setInput({...input, price: price })}
                            />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Picker
                                selectedValue={input.id_categories}
                                style={{height: 50, width: 100,color:'white'}}
                                onValueChange={(itemValue) =>
                                    setInput({...input,id_categories: itemValue})
                                }>
                                {category.map(item=>{
                                    return(
                                        <Picker.Item key={item.id_categories} label={item.Categories} value={item.id_categories} style={{color:'white'}} />
                                    )
                                })}
                            </Picker>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input 
                                placeholder="Insert Quantity ...."  
                                placeholderTextColor="white"
                                keyboardType={'numeric'}
                                style={{color:'white'}}
                                onChangeText={(quantity) => setInput({...input, quantity: quantity })}/>
                        </Item>
                        <Button 
                            style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						    onPress={handleSubmit} rounded>
                            {isLoading===true?<Spinner color='#15202b' />:<Text style={{fontWeight:"bold",fontSize: 17}}>Add </Text>}
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

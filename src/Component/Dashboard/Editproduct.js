import React, { useState,useEffect} from 'react';
import {
  View,
  Alert
} from 'react-native';
import { Picker,Container,Content,Text,Button,Form,Item,Input,Textarea,Toast,Spinner  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {patchProduct} from '../Public/Redux/Actions/product';

Editproduct.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Editproduct(props) {
    const [input, setInput] = useState({id_product:"",name: "", description: "",image: "",id_categories: "",price:"" ,quantity:"" });
    const {navigation}=props;
    const dispatch = useDispatch()
    const category = useSelector(state => state.categories.categoriesList)
    const isLoading=useSelector(state=>state.product.isLoading)

    const handleSubmit = async () => {
        if(input.name===''||input.description===''||input.image===''||input.id_categories===''||input.price===''||input.quantity===''){
            Alert.alert('Data Cant be Empty')
        }else{
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
        }
    };

    useEffect(()=>{
        setInput(navigation.state.params.list);
    },[])
   
	return (
        <Container style={{backgroundColor: '#15202b'}}>
            <Content style={{paddingRight:'8%'}}>
                <View style={{paddingTop:30,justifyContent: 'center'}}>
                    <Form>
                        <Item >
                            <Input 
                                placeholder="Insert Name...." 
                                placeholderTextColor="white" 
                                style={{color:'white'}}
                                onChangeText={(name) => setInput({...input, name: name })}
                                value={input.name}/>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Textarea 
                                placeholderTextColor="white" 
                                style={{color:'white'}}
                                placeholder="Insert Description" 
                                onChangeText={(description) => setInput({...input, description:description})} 
                                rowSpan={3} 
                                value={input.description}  />
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input 
                                placeholderTextColor="white" 
                                style={{color:'white'}}
                                placeholder="Insert Url ...." 
                                onChangeText={(image) => setInput({...input, image: image })}
                                value={input.image}/>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input 
                                placeholderTextColor="white" 
                                style={{color:'white'}}
                                keyboardType={'numeric'}
                                placeholder="Insert Price ...." 
                                onChangeText={(price) => setInput({...input, price: price })}
                                value={input.price.toString()}/>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Picker
                                selectedValue={input.id_categories}
                                style={{height: 50, width: 100,color:'white'}}
                                placeholderTextColor="white"
                                onValueChange={(itemValue) =>
                                    setInput({...input,id_categories: itemValue})
                                }>
                                {category.map(item=>{
                                    return(
                                        <Picker.Item key={item.id_categories} label={item.Categories} value={item.id_categories} />
                                    )
                                })}
                            </Picker>
                        </Item>
                        <Item style={{marginTop:15}}>
                            <Input 
                                keyboardType={'numeric'}
                                placeholder="Insert Quantity ...."
                                placeholderTextColor="white"
                                style={{color:'white'}} 
                                onChangeText={(quantity) => setInput({...input, quantity: quantity })}
                                value={input.quantity.toString()}/>
                            <Input />
                        </Item>
                        <Button 
                            style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						    onPress={handleSubmit} rounded>
                            {isLoading===true?<Spinner color='#15202b' />:<Text style={{fontWeight:"bold",fontSize: 17}}>Save </Text>}
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

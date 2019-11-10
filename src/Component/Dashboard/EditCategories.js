import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left,Button, Icon, Fab,Form,Item,Input  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {patchCategories} from '../Public/Redux/Actions/categories';

export default function Editcategories(props) {
    const [input, setInput] = useState({ id_categories:"",Categories:"" });
    const {navigation}=props;

    const dispatch = useDispatch()

    console.log(input)
    const handleSubmit = async (event) => {
        dispatch(patchCategories (input))
        .then(response => {
        if (response.value.data.status === 200) {
            props.navigation.navigate('Category')
        } else {
            alert(response.value.data.message);
        }
        })
        .catch(error => alert(error));
    };

    
    useEffect(()=>{
        setInput({id_categories: navigation.state.params.id,Categories:navigation.state.params.name })
    },[])
   
    
   
	return (
        <Container>
            <Content >
                <View style={{width: 300,paddingTop:40,justifyContent: 'center'}}>
                    <Form>
                        <Item>
                            <Input placeholder="Insert Categories" 
                            onChangeText={(Categories) => setInput({...input, Categories: Categories })}
                            value={input.Categories}/>
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

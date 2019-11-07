import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left,Button, Icon, Fab,Form,Item,Input  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {postCategories} from '../Public/Redux/Actions/categories';

export default function Addcategories(props) {
    const [input, setInput] = useState({ id_categories:"",Categories:"" });
    const dispatch = useDispatch()

    //Get data Delete
    const delCategories =(row)=>{
        setInput(row)
        setModaldelete(!modaldelete);
    }

    const handleSubmit = async (event) => {
        dispatch(postCategories (input))
        .then(response => {
            console.log(response.value)
        if (response.value.data.status === 200) {
            props.navigation.navigate('Category')
        } else {
            alert(response.value.data.message);
        }
        })
        .catch(error => alert(error));
    };

    console.log(input)
	return (
        <Container>
            <Content >
                <View style={{width: 300,paddingTop:40,justifyContent: 'center'}}>
                    <Form>
                        <Item>
                            <Input placeholder="Insert Categories" 
                            onChangeText={(Categories) => setInput({...input, Categories: Categories })}/>
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

import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left,Button, Icon, Fab,Form,Item,Input,Toast  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {postCategories} from '../Public/Redux/Actions/categories';

Addcategories.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Addcategories(props) {
    const [input, setInput] = useState({ id_categories:"",Categories:"" });
    const dispatch = useDispatch()
    
    // console.log("DATA=",navigation.state.params.name)
    // console.log("ID=",navigation.state.params.id)

    const handleSubmit = async (event) => {
        dispatch(postCategories (input))
        .then(response => {
            console.log(response.value)
        if (response.value.data.status === 200) {
            Toast.show({
				position: "top",
				duration: 3000,
				text: response.value.data.message,
				buttonText: 'Okay',
				type: "success"
			  })
            props.navigation.navigate('Category')
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

    // console.log("DATA",navigation.state.params.id)
   
	return (
        <Container style={{backgroundColor: '#15202b'}}>
            <Content >
                <View style={{width: 300,paddingTop:40,justifyContent: 'center'}}>
                    <Form>
                        {/* <Text>{JSON.stringify(navigation.getparam('passedData','Null'))}</Text> */}
                        <Item>
                            <Input placeholder="Insert Categories"  placeholderTextColor="white"
                            onChangeText={(Categories) => setInput({...input, Categories: Categories })}/>
                            <Input />
                        </Item>
                        <Item>
                        </Item>
                        <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						 onPress={handleSubmit} rounded>
						<Text style={{fontWeight:"bold",fontSize: 17}}>Add </Text>
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

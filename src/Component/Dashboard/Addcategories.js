import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Container,Content,Text,Button,Spinner,Form,Item,Input,Toast  } from 'native-base';
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
    const isLoading=useSelector(state=>state.categories.isLoading)

    const handleSubmit = async (event) => {
        dispatch(postCategories (input))
        .then(response => {
        if (response.value.data.status === 200) {
            Toast.show({
				position: "top",
				duration: 3000,
				text: response.value.data.message,
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
   
	return (
        <Container style={{backgroundColor: '#15202b'}}>
            <Content >
                <View style={{width: 300,paddingTop:40,justifyContent: 'center'}}>
                    <Form>
                        <Item>
                            <Input 
                            placeholder="Insert Categories"  
                            placeholderTextColor="white"
                            style={{color:'white'}}
                            onChangeText={(Categories) => setInput({...input, Categories: Categories })}/>
                        </Item>
                        <Item>
                        </Item>
                        <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						    onPress={handleSubmit} rounded>
                            {isLoading===true?<Spinner color='#15202b' />:<Text style={{fontWeight:"bold",fontSize: 17}}>Add </Text>}
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Container, Header, Content, Text,Button,Form,Item,Input,Spinner,Toast  } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {patchCategories} from '../Public/Redux/Actions/categories';

Editcategories.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Editcategories(props) {
    const [input, setInput] = useState({ id_categories:"",Categories:"" });
    const {navigation}=props;
    const isLoading=useSelector(state=>state.categories.isLoading)
    const token = useSelector(state => state.auth.Token)
    const dispatch = useDispatch()

    const handleSubmit = async () => {
        dispatch(patchCategories (input,token))
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

    
    useEffect(()=>{
        setInput({id_categories: navigation.state.params.id,Categories:navigation.state.params.name })
    },[])
   
    
   
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
                            onChangeText={(Categories) => setInput({...input, Categories: Categories })}
                            value={input.Categories}/>
                        </Item>
                        <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#e0245e"}}
						 onPress={handleSubmit} rounded>
                             {isLoading===true?<Spinner color='#15202b' />:<Text style={{fontWeight:"bold",fontSize: 17}}>Save </Text>}
					</Button>
                    </Form>
                </View>
            </Content>
        </Container>	
	);
}

import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { 
  Thumbnail,
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Body, 
  Text, 
  Left,
  Button, 
  Icon, 
  Fab ,
  Right,
   } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {getCategories} from '../Public/Redux/Actions/categories';
import AwesomeAlert from 'react-native-awesome-alerts';
import {deleteCategories } from '../Public/Redux/Actions/categories';

export default function Category(props) {
  const [input, setInput] = useState({ id_categories:"",Categories:"" });
  const [showAlert, setAlert] = useState(false);
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categoriesList)

  const fetchddata=async()=>{
    await dispatch(getCategories (input))
    .then(result => {
      // console.log("Input",input)
      // console.log("Hasil",result)
    })
    .catch(err => {
      alert(err);
    });
  }

  useEffect(()=>{
    fetchddata()
  },[])

  const deleteCategories=(id)=>{
    console.log(id)
    dispatch(deleteCategories(id))
		.then(response => {
		if (response.value.data.status === 200) {
      
		} else {
			alert(response.value.data.message);
		}
		})
		.catch(error => alert(error));
  }
 const hideAlert = () => {
    setAlert(false);
  };
	return (
        <Container>
            <Header style={{backgroundColor:'white'}}>
                <Text>Management Categories</Text>
            </Header>
            <Content >
            <ScrollView>
                {categories.map(item=>{
                    return(
                    <View style={{paddingStart:5,paddingEnd:5}}>
                        <Card >
                            <CardItem>
                            <Body style={{flexDirection:'row'}} >
                                <View style={{flexDirection: 'column',paddingStart:10,width:'77%'}}>
                                    <Text >{item.Categories}</Text>
                                </View>
                                  <Right>
                                  <TouchableOpacity
                                    onPress={() => {
                                      alert('Edit!');
                                    }}>
                                    <Icon type="Ionicons" name="md-create" style={{fontSize: 20, color: 'green',paddingEnd:10}} />
                                  </TouchableOpacity> 
                                  </Right>
                                  <TouchableOpacity
                                    onPress={(item) => {deleteCategories(item.id_categories)}}
                                    //onPress={()=>{alert('Edit!'),setInput({...input,id_categories:item.id_categories})}}
                                    >
                                    <Icon type="Ionicons" name="ios-trash" style={{fontSize: 20, color: 'red',paddingStart:5}} />
                                  </TouchableOpacity>
                            </Body>
                            </CardItem>
                        </Card>
                        
                    </View>
                    )
                })}
            </ScrollView>
              
            </Content>
            <Fab
              containerStyle={{ }}
              style={{ backgroundColor: '#f6b233', }}
              position="bottomRight"
              onPress={() =>
                props.navigation.navigate('Addcategories')
              }
             >
              <Icon name="add" />
            </Fab>
           
        </Container>	
	);
}

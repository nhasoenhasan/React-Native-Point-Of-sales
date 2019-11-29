import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Alert,
  StatusBar
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
  Toast,
  Button, 
  Icon, 
  Fab ,
  Right
   } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';
import {getCategories} from '../Public/Redux/Actions/categories';
import {deleteCategories} from '../Public/Redux/Actions/categories';

export default function Category(props) {
  const [input, setInput] = useState({ id_categories:"",Categories:"" });
  const [showToast, setshowToast] = useState(false);
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

  const handleSubmitdelete = async (id) => {
    try {
      await dispatch(deleteCategories(id))
    } catch (err) {
      console.log(err)
    }
  };

  const onShow=(item)=>{
    Alert.alert(
      'Delete This Item?',
      item.Categories,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', 
          onPress: () =>  handleSubmitdelete(item.id_categories)},
          
      ],
      {cancelable: false},
    );
    
  }
  

	return (
        <Container style={{backgroundColor:'#15202b'}}>
            <Header style={{backgroundColor:'#15202b'}}>
                <Text style={{paddingTop:14,fontWeight:'bold',color:'white'}}>Management Categories</Text>
            </Header>
            <Content >
           
            <ScrollView>
                {categories.map(item=>{
                    return(
                    <View key={item.id_categories} style={{paddingStart:5,paddingEnd:5}}>
                       <StatusBar backgroundColor="#e0245e" barStyle="light-content"/>
                        <Card >
                            <CardItem>
                            <Body style={{flexDirection:'row'}} >
                                <View style={{flexDirection: 'column',paddingStart:10,width:'77%'}}>
                                    <Text >{item.Categories}</Text>
                                </View>
                                <View>
                                  <TouchableOpacity
                                      onPress={() =>
                                        props.navigation.navigate('Editcategories',{
                                          name:item.Categories,
                                          id:item.id_categories
                                        })
                                      }>
                                      <Icon type="Ionicons" name="md-create" style={{fontSize: 30, color: 'green',paddingEnd:30}} />
                                    </TouchableOpacity> 
                                </View>
                                <View>
                                <TouchableOpacity
                                      onPress={()=>{onShow(item)}}
                                      style={{marginRight:20}}
                                    >
                                      <Icon type="Ionicons" name="ios-trash" style={{fontSize: 30, color: 'red',paddingStart:5,marginEnd:30}} />
                                    </TouchableOpacity>
                                </View>
                            </Body>
                            </CardItem>
                        </Card>
                    </View>
                    )
                })}
            </ScrollView>
              
            </Content>
            <View >
                <Fab
                  containerStyle={{ }}
                  style={{ backgroundColor: '#e0245e', }}
                  position="bottomRight"
                  onPress={() =>
                    props.navigation.navigate('Addcategories')
                  }
                  >
                  <Icon name="add" />
                </Fab>
              </View>
           
        </Container>	
	);
}

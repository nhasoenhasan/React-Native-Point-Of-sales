import React, { useState,useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import {Content, Container,Card, CardItem, Header, Item, Input, Button, Text, Thumbnail, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useSelector,useDispatch  } from 'react-redux';
import {getProduct} from '../Public/Redux/Actions/product';
import { addToCart } from '../Public/Redux/Actions/cartActions';


export default function Dashboard(props) {
  const [input, setInput] = useState({ search: "",sort: "",order:"" });
  const dispatch = useDispatch()

  const fetchddata=async()=>{
    await dispatch(getProduct (input))
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
  },[input])

  const addCart=(item)=>{
    dispatch(addToCart(item))
  }

  const product = useSelector(state => state.product.productList)
	return (
    <Container style={{backgroundColor: '#15202b'}}>
      
      <Header style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#15202b',
        }} >
    
          <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={{paddingTop:8}}>
            <Thumbnail small style={{marginStart:10}}  source={{uri: 'https://avatars3.githubusercontent.com/u/23376494?s=460&v=4'}}/>
          </TouchableOpacity>
          <Item 
              rounded 
              style={{
                width:230,height:34,
                borderWidth: 3,
                borderRadius: 10,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: 'white',
                backgroundColor:'white',
                shadowOffset: { width: 20, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
                elevation: 1,
                marginTop:9,
                }}>
              <Input style={{paddingTop:10,paddingStart:20}} placeholder='Search....'
              onChangeText={(search) => setInput({...input, search: search })}/>
            </Item>
            <TouchableOpacity  onPress={() =>props.navigation.navigate('Chart')}>
            <Icon
              style={{ paddingRight: 10,marginTop:7,paddingEnd:20,color:'#e0245e',paddingTop:5 }}
             
              name="cart"
              size={25}
            />
            </TouchableOpacity>
      </Header>
      <View>
      <StatusBar backgroundColor="#e0245e" barStyle="light-content" />
        <View style={{height:50,flexDirection: 'row',justifyContent: 'space-between',paddingEnd:20,paddingStart:20}}>
          <View style={{width:60,paddingTop:10}}> 
            <Button rounded small style={{backgroundColor:'#e0245e'}}
               onPress={() => setInput({...input, sort: 'date_added' })}>
              <Text style={{fontSize:11}}>New</Text>
            </Button>
          </View>
          <View style={{width:65,paddingTop:10}} > 
            <Button rounded small  style={{backgroundColor:'#e0245e'}}
               onPress={() => setInput({...input, sort: 'name' })}>
              <Text style={{fontSize:11}}>Name</Text>
            </Button>
          </View>
          <View style={{width:100,paddingTop:10}}>  
            <Button rounded small  style={{backgroundColor:'#e0245e'}} onPress={() => setInput({...input, sort: 'Categories' })}>
              <Text style={{fontSize:11}}>Categories</Text>
            </Button>
          </View>

        </View>
      </View>
     <Content>
      <View >
      <ScrollView>
        {product.map(item=>{
          return(
            <View key={item.id_product}style={{paddingStart:5,paddingEnd:5}}>
              <Card>
                  <CardItem  >
                  <Body style={{flexDirection:'row'}} >
                      <View style={{paddingTop:10}}>
                          <Thumbnail square large source={{uri: item.image}} />
                      </View>
                      <View style={{flexDirection: 'column',paddingStart:10,width:'77%'}}>
                          <Text >{item.name}</Text>
                          <Text   >Rp.{item.price}</Text>
                          <Text   >Quantity {item.quantity}</Text>
                      </View>
                      
                  </Body>
                  <View style={{width:60}} >
                        <Button small rounded success onPress={()=>{addCart(item.id_product)}}>
                          <Text>Add</Text>
                        </Button>
                      </View>
                  </CardItem>
              </Card>
          </View>
          )
        })}
      </ScrollView>
      </View>
      </Content>
    </Container>	
	);
}

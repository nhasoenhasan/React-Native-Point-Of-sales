import React, { useState,useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {Content, Container,Card, CardItem, Header, Item, Input, Button, Text, Thumbnail, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useSelector,useDispatch  } from 'react-redux';
import {getProduct} from '../Public/Redux/Actions/product';


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

  const product = useSelector(state => state.product.productList)
	return (
    <Container >
      <Header style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white'}} >
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Thumbnail small style={{marginStart:10}}  source={{uri: 'http://lawlessjakarta.com/wp-content/uploads/2017/09/Lawless_burgerbar_header.gif'}}/>
        </TouchableOpacity>
        <Item 
            rounded 
            style={{
              width:230,height:34,
              boxShadow: "0px 10px 100px 5px black",
              borderWidth: 3,
              borderRadius: 10,
              borderColor: '#ddd',
              borderBottomWidth: 0,
              shadowColor: 'black',
              shadowOffset: { width: 20, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 5,
              elevation: 1,
              marginTop:5}}>
            <Input style={{paddingTop:10,paddingStart:20}} placeholder='Search....'
             onChangeText={(search) => setInput({...input, search: search })}/>
          </Item>
          <Icon
            style={{ paddingRight: 10,marginTop:7,paddingEnd:20,color:'#f6b233' }}
            onPress={() =>props.navigation.navigate('Page2')}
            name="cart"
            size={25}
          />
      </Header>
      <View>
        <View style={{height:50,flexDirection: 'row',justifyContent: 'space-between',paddingEnd:20,paddingStart:20}}>
          <View style={{width:75,paddingTop:10}}> 
            <Button rounded small warning
               onPress={() => setInput({...input, sort: 'date_updated' })}>
              <Text style={{fontSize:11}}>Update</Text>
            </Button>
          </View>
          <View style={{width:60,paddingTop:10}}> 
            <Button rounded small warning
               onPress={() => setInput({...input, sort: 'date_added' })}>
              <Text style={{fontSize:11}}>New</Text>
            </Button>
          </View>
          <View style={{width:65,paddingTop:10}} > 
            <Button rounded small warning
               onPress={() => setInput({...input, sort: 'name' })}>
              <Text style={{fontSize:11}}>Name</Text>
            </Button>
          </View>
          <View style={{width:100,paddingTop:10}}>  
            <Button rounded small warning onPress={() => setInput({...input, sort: 'Categories' })}>
              <Text style={{fontSize:11}}>Categories</Text>
            </Button>
          </View>

        </View>
      </View>
     <Content>
      <View style={{flexDirection: 'column',alignItems:'center'}}>
      <ScrollView>
        {product.map(item=>{
          return(
            <Card style={{width:300,backgroundColor:'black'}}>
              <CardItem cardBody>
                <Image  source={{uri:item.image}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem style={{width:300,backgroundColor:'black'}}>  
                <Left>
                  <Text style={{color:'white'}}>{item.name}</Text>
                </Left>
              </CardItem>
            </Card>
          )
        })}
      </ScrollView>
      </View>
      </Content>
    </Container>	
	);
}

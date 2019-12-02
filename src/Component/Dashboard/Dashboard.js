import React, { useState,useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {Content, Container,Card, CardItem, Header, Item, Input, Button, Text, Thumbnail,Body,Spinner,Badge } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useSelector,useDispatch  } from 'react-redux';
import {getProduct} from '../Public/Redux/Actions/product';
import {getCategories} from '../Public/Redux/Actions/categories';
import { addToCart } from '../Public/Redux/Actions/cartActions';
import {getOrder} from '../Public/Redux/Actions/cartActions';
import notFoundillustration from '../../Assets/Images/notFound.png'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Dashboard(props) {
  const [input, setInput] = useState({ search: "",sort: "",order:"" });
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.product.isLoading)
  const token = useSelector(state => state.auth.Token)
  const items = useSelector(state => state.product.addedItems)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const fetchddata=async()=>{
    await dispatch(getProduct (input,token))
    .then(result => {
      
    })
    .catch(err => {
      alert(err);
    });
  }

  const fetchddatacategories=async()=>{
    await dispatch(getCategories (input,token))
    .then(result => {
    })
    .catch(err => {
      alert(err);
    });
  }

  const fetchddataOrder=async()=>{
    await dispatch(getOrder(token))
    .then(result => {

    })
    .catch(err => {
      alert(err);
    });
  }
  
  useEffect(()=>{
    fetchddatacategories()
  },[])

  useEffect(()=>{
    fetchddata()
  },[input])

  useEffect(()=>{
      fetchddataOrder()
    },[])

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
            <Thumbnail small style={{marginStart:10}}  source={{uri: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/72771346_453959675315642_344653513424789892_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&oh=5059274e73031ab025ea2a174caf23cd&oe=5E69FE3C'}}/>
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
            <Badge info style={{position:'absolute',marginStart:10,marginTop:2}}>
              <Text >{items.length}</Text>
            </Badge>
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
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        {isLoading===true?
        <View style={{paddingTop:'50%'}}>
          <Spinner color='#e0245e'/>
        </View>
        :
        product.length===0 && isLoading===false?
        <View style={{alignItems:'center',paddingTop:'10%'}}>
            <Image source={notFoundillustration} style={{resizeMode: 'contain',height: 225,width:255}}/>
            <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Product Does Not Exist</Text>
        </View>
        :
        product.map(item=>{
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
                      </View>
                      
                  </Body>
                  <View style={{width:60}} >
                        <Button small rounded info onPress={()=>{addCart(item.id_product)}}>
                          <Text>Add</Text>
                        </Button>
                      </View>
                  </CardItem>
              </Card>
          </View>
          )
        })
      }
      </ScrollView>
      </View>
      </Content>
    </Container>	
	);
}

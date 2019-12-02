import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import {deleteProduct} from '../Public/Redux/Actions/product';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text,Spinner,Icon,Fab,Button,Right } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';

export default function Product(props) {
    const product = useSelector(state => state.product.productList)
    const isLoading = useSelector(state => state.product.isLoading)
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.Token)

    const handleSubmitdelete = async (id) => {
        try {
          await dispatch(deleteProduct(id,token))
        } catch (err) {
          console.log(err)
        }
      };

    const onShow=(item)=>{
        Alert.alert(
          'Delete This Item?',
          item.name,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', 
              onPress: () =>  handleSubmitdelete(item.id_product)},
              
          ],
          {cancelable: false},
        );
    }
	return (
        <Container style={{backgroundColor:'#15202b'}}>
            <Header style={{backgroundColor:'#15202b'}}>
                <Text style={{paddingTop:14,fontWeight:'bold',color:'white'}}>Management Product</Text>
            </Header>
            <Content >
            <ScrollView >
              {product.map(item=>{
                    return(
                    <View key={item.id_product} >
                      <StatusBar backgroundColor="#e0245e" barStyle="light-content"/>
                        <Card >
                            <CardItem  >
                            <Body style={{flexDirection:'row'}} >
                                <View style={{flexDirection: 'row',paddingTop:10}}>
                                    <Thumbnail square large source={{uri: item.image}} />
                                </View>
                                <View style={{flexDirection: 'column',paddingStart:20,width:'77%'}}>
                                    <Text >{item.name}</Text>
                                    <Text >Quantity:{item.quantity}</Text>
                                    <Text >Rp.{item.price}</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity
                                        style={{paddingTop:35}}
                                        onPress={() =>
                                        props.navigation.navigate('Editproduct',{
                                            list:item,
                                        })
                                        }>
                                        <Icon type="Ionicons" name="md-create" style={{fontSize: 25, color: '#62b1f6',paddingEnd:30}} />
                                    </TouchableOpacity> 
                                    <TouchableOpacity
                                        style={{paddingTop:35}}
                                        onPress={()=>{onShow(item)}}
                                        >
                                        <Icon type="Ionicons" name="ios-trash" style={{fontSize: 25, color: '#e0245e',paddingStart:5}} />
                                  </TouchableOpacity>
                                  </View>
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
                props.navigation.navigate('AddProduct')
              }
             >
              <Icon name="add" />
            </Fab>
            </View>
        </Container>	
	);
}

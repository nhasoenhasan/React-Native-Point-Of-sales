import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';

export default function Page1() {
    const product = useSelector(state => state.product.productList)

	return (
        <Container>
            <Header style={{backgroundColor:'white'}}>
                <Text>Management Product</Text>
            </Header>
            <Content >
            <ScrollView>
                {product.map(item=>{
                    return(
                    <View style={{paddingStart:5,paddingEnd:5}}>
                        <Card >
                            <CardItem>
                            <Body style={{flexDirection:'row'}} >
                                <View style={{flexDirection: 'row',paddingTop:10}}>
                                    <Thumbnail square large source={{uri: item.image}} />
                                </View>
                                <View style={{flexDirection: 'column',paddingStart:10,width:'77%'}}>
                                    <Text >{item.name}</Text>
                                    <Text  >{item.description}</Text>
                                    <Text >Rp.{item.price}</Text>
                                </View>
                            </Body>
                            </CardItem>
                        </Card>
                    </View>
                    )
                })}
            </ScrollView>
            </Content>
        </Container>	
	);
}

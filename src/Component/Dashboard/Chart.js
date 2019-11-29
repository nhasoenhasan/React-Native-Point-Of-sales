import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Text,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Thumbnail,Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { addQuantity,subtractQuantity,removeItem,postOrder} from '../Public/Redux/Actions/cartActions';
import { connect } from 'react-redux';

Cart.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Cart(props){

    const [input, setInput]=useState({
        id_product:"",
        name:"",
        total:"",
        image:"",
        
    });

    const [Total, setTotal]=useState({
        sub_total:""
    });

    const items = useSelector(state => state.product.addedItems)
    const Totals = useSelector(state => state.product.total)
    const dispatch=useDispatch()


    useEffect(()=>{
        setInput({ ...props.items})
    },[props.items])

    useEffect(()=>{
        setTotal({ sub_total:props.Total})
    },[props.Total])

    const handleAddQuantity =(id)=>{
        dispatch(addQuantity(id));
    }

    const handleSubtractQuantity = (id,quantity)=>{
        if(quantity===1){
            dispatch(removeItem(id));
        }else{
            dispatch(subtractQuantity(id));
        }
    }

    const handlecheckout = async()=>{
        try {
            await dispatch(postOrder(input,Total))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Container style={{backgroundColor:'#15202b'}}>
            <Content>
            {items.map(item=>{
                return(
                <View key={item.id_product} style={{padding:10}}>
                    <Card style={{height:140}}>
                        <CardItem>
                        <Body style={{flexDirection:'row',marginTop:12}}>
                            <Thumbnail source={{uri:item.image}} square large  />
                            <View style={{flexDirection:'column',paddingLeft:10}}>
                                <Text style={{paddingBottom:5}}>{item.name}</Text>
                                <Text style={{paddingBottom:5}}>Price</Text>
                            </View>
                            <View style={{paddingLeft:35,flexDirection:'row',paddingTop:50}}>
                                    <Button onPress={()=>handleAddQuantity(item.id_product)} style={{width:20,justifyContent:'center',backgroundColor:'#e0245e'}} small >
                                        <Icon style={{color:'white'}}name="plus"></Icon>
                                    </Button>
                                    <View style={{justifyContent:'center',paddingLeft:10,paddingRight:10}}>
                                        <Text>
                                            {item.quantity}
                                        </Text>
                                    </View>
                                    <Button onPress={()=>{handleSubtractQuantity(item.id_product,item.quantity)}} style={{width:20,justifyContent:'center',backgroundColor:'#e0245e'}}  small>
                                        <Icon name="minus" style={{color:'white'}}></Icon>
                                    </Button>
                            </View>

                        </Body>
                        </CardItem>
                    </Card>
                </View> 
                )
              })} 

             
            </Content>
            <View >
                <View style={{justifyContent:'flex-start',marginBottom:6,marginLeft:5,paddingTop:10}}>
            <Text style={{fontWeight:'bold',color:'white'}}>Total: Rp.{Totals}</Text>
                </View>
               <Button onPress={()=>{handlecheckout()}} style={{justifyContent:'center',backgroundColor:'#e0245e'}} >
                    <Text style={{fontWeight:'bold',color:'white',fontSize:18}}> checkout </Text>
                </Button>
            </View>
        </Container>
    );
  
}



// export default connect (mapStateToProps,mapDispatchToProps) (Cart);
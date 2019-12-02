import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Text,View,Alert,Image } from 'react-native';
import { Container,Spinner, Content, Card, CardItem, Body,Thumbnail,Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { addQuantity,subtractQuantity,removeItem,postOrder} from '../Public/Redux/Actions/cartActions';
import Cartillustration from '../../Assets/Images/Cart.png';

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
        qty:" ",
    });
    const[isLoading,setisLoading]=useState(false);

    const [Total, setTotal]=useState();

    const items = useSelector(state => state.product.addedItems)
    const Totals = useSelector(state => state.product.total)
    const dispatch=useDispatch()


    useEffect(()=>{
        setInput({ ...items})
    },[items])

    useEffect(()=>{
        setTotal(Totals)
    },[Totals])

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
        setisLoading(true)
        try {
             const result = await dispatch(postOrder(input,Totals))
             if(result.action.payload.data.status===200){
                setisLoading(false)
                Alert.alert(result.action.payload.data.message)
             }else{
                setisLoading(false)
                Alert.alert(result.action.payload.data.message)
             }
        } catch (error) {
            setisLoading(false)
            Alert.alert(error)
        }
    }
    
    return (
        <Container style={{backgroundColor:'#15202b'}}>
            <Content>
            {items.length===0?
            <View style={{alignItems:'center',paddingTop:'10%'}}>
                <Image source={Cartillustration} style={{resizeMode: 'contain',height: 320}}/>
                <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Your Cart is Empty</Text>
            </View>
            :
            items.map(item=>{
                return(
                <View key={item.id_product} style={{padding:'2%'}}>
                    <Card>
                        <CardItem>
                        <Body style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{width:'30%',height:100,padding:'3%'}}>
                                <Thumbnail source={{uri:item.image}} square large  />
                            </View>
                            <View style={{width:'35%',height:100,padding:'3%',justifyContent:'center'}}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={{width:'35%',height:100,flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{justifyContent:'center',width:'33%',padding:'7%'}}>
                                    <Button onPress={()=>handleAddQuantity(item.id_product)} style={{width:20,justifyContent:'center',backgroundColor:'#e0245e'}} small >
                                        <Icon style={{color:'white'}}name="plus"></Icon>
                                    </Button>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Text >
                                        {item.quantity}
                                    </Text>
                                </View>
                                <View style={{justifyContent:'center',width:'35%',padding:'7%'}}>
                                <Button onPress={()=>{handleSubtractQuantity(item.id_product,item.quantity)}} style={{width:20,justifyContent:'center',backgroundColor:'#e0245e'}}  small>
                                    <Icon name="minus" style={{color:'white'}}></Icon>
                                </Button>
                                </View>
                            </View>
                        </Body>
                        </CardItem>
                    </Card>
                </View>
                )
              })
            }
            </Content>
            <View >
                {items.length===0?
                <View></View>
                :
                <View>
                    <View style={{justifyContent:'flex-start',marginBottom:6,marginLeft:5,paddingTop:10}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Total: Rp.{Totals}</Text>
                    </View>
                    <Button onPress={()=>{handlecheckout()}} style={{justifyContent:'center',backgroundColor:'#e0245e'}} >
                        {isLoading===true?<Spinner color='15202b'/>:<Text style={{fontWeight:'bold',color:'white',fontSize:18}}> checkout </Text>}
                    </Button>
                </View>
                }
            </View>
        </Container>
    );
  
}
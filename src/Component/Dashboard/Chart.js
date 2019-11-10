import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Text,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Thumbnail,Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { addQuantity,subtractQuantity,removeItem,postOrder} from '../Public/Redux/Actions/cartActions';
import { connect } from 'react-redux';

const  Cart= (props)=> {

    const [input, setInput]=useState({
        id_product:"",
        name:"",
        total:"",
        image:"",
        
    });

    const [Total, setTotal]=useState({
        sub_total:""
    });


    useEffect(()=>{
        setInput({ ...props.items})
    },[props.items])

    useEffect(()=>{
        setTotal({ sub_total:props.Total})
    },[props.Total])

    const handleAddQuantity =(id)=>{
        props.addQuantity(id);
    }

    const handleSubtractQuantity = (id)=>{
        props.subtractQuantity(id);
    }

    const handleRemove = (id)=>{
        props.removeItem(id);
    }

    const handlecheckout = async()=>{
        try {
            await props.dispatch(postOrder(input,Total))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Container >
            <Content>
            {props.items.map(item=>{
                return(
                <View style={{padding:10}}>
                    <Card style={{height:140}}>
                        <CardItem>
                        <Body style={{flexDirection:'row',marginTop:12}}>
                            <Thumbnail source={{uri:item.image}} square large  />
                            <View style={{flexDirection:'column',paddingLeft:10}}>
                                <Text style={{paddingBottom:5}}>{item.name}</Text>
                                <Text style={{paddingBottom:5}}>Price</Text>
                            </View>
                            <View style={{paddingLeft:35,flexDirection:'row',paddingTop:50}}>
                                    <Button onPress={()=>handleAddQuantity(item.id_product)} style={{width:20,justifyContent:'center'}} small success>
                                        <Icon name="plus"></Icon>
                                    </Button>
                                    <View style={{justifyContent:'center',paddingLeft:10,paddingRight:10}}>
                                        <Text>
                                            {item.quantity}
                                        </Text>
                                    </View>
                                    <Button onPress={()=>{handleSubtractQuantity(item.id_product)}} style={{width:20,justifyContent:'center'}}  small danger>
                                        <Icon name="minus"></Icon>
                                    </Button>
                                    <View style={{paddingLeft:7}}>
                                        <Button onPress={()=>{handleRemove(item.id_product)}} style={{width:20,justifyContent:'center'}}  small danger>
                                            <Icon name="delete"></Icon>
                                        </Button>
                                    </View>
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
            <Text style={{fontWeight:'bold'}}>Total: Rp.{props.Total}</Text>
                </View>
               <Button onPress={()=>{handlecheckout()}} success style={{justifyContent:'center'}} >
                    <Text style={{fontWeight:'bold',color:'white',fontSize:18}}> checkout </Text>
                </Button>
            </View>
        </Container>
    );
  
}

const mapStateToProps = (state)=>{
    return{
        items: state.product.addedItems,
        Total: state.product.total,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        removeItem: (id)=>{dispatch(removeItem(id))},
        postOrder:(input)=>{dispatch(postOrder(input))}
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Cart);
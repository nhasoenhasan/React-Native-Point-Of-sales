import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default class BoldAndBeautiful extends Component {
  render() {
    return (
        <Container >
            <Content>
                <View style={{padding:10}}>
                    <Card style={{height:140}}>
                        <CardItem>
                        <Body>
                            <Text>
                            //Your text here
                            </Text>
                        </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        </Container>
    );
  }
}
import React,{useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {
  LineChart,
  BarChart
} from "react-native-chart-kit";
import {Container} from 'native-base'
import { useSelector,useDispatch  } from 'react-redux';

Orderhistory.navigationOptions={
    headerStyle: {
        backgroundColor: '#15202b',
    },
    headerTintColor: '#fff'
}

export default function Orderhistory(props) {
    // const dispatch=useDispatch()
    // const isLoading = useSelector(state => state.product.isLoading)
    const Order = useSelector(state => state.product.orderHistory)
    let arrcounted_orders = [];
    let arrmonthname_orders=[];
    let datas=Order.data;

    for(var i=0; i<datas.length; i++) {
        arrcounted_orders.push(datas[i].counted_order);
        arrmonthname_orders.push(datas[i].month_name);
    }

    const fetchddata=async()=>{
      await dispatch(getOrder())
      .then(result => {

      })
      .catch(err => {
        alert(err);
      });
    }

    return (
      <Container style={{backgroundColor:'#15202b'}}> 
        <View style={styles.sectionContainer}>
            <Text style={{color:'white'}}>Order Total</Text>
            <LineChart
                data={{
                labels: arrmonthname_orders,
                datasets: [
                    {
                    data: arrcounted_orders
                    }
                ]
                }}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={{
                backgroundColor: "#e0245e",
                backgroundGradientFrom: "#e0245e",
                backgroundGradientTo: "#e0245e",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `white`,
                labelColor: (opacity = 1) => `white`,
                style: {
                    borderRadius: 16
                }
                }}
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>
      </Container>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:'#15202b'
  },
});

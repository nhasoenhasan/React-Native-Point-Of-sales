import axios from 'axios'
export const addToCart= (id)=>{
    return{
        type: 'ADD_TO_CART',
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: 'SUB_QUANTITY',
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id
    }
}

// POST ORDER
export const postOrder=(order,total)=>{
    return{
        type: 'POST_ORDER',
        payload:axios.post('https://poswebsite.herokuapp.com/product/order/',{total,order})
    }
}

export const getOrder=()=>{
  return{
      type: 'GET_ORDER',
      payload:axios.get('https://poswebsite.herokuapp.com/product/order/')
  }
}
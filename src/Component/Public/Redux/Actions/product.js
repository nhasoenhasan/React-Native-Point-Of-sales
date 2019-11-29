import axios from 'axios';
// const token = localStorage.getItem("x-access-token");
// const headers = {
//   "xaccess-token": token
// };

export const getProduct = (data) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get ('https://poswebsite.herokuapp.com/product',{params: data}),
  };
};

export const postProduct = (input) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post ('https://poswebsite.herokuapp.com/product',input),
  };
};

export const patchProduct = (input) => {
  const id=input.id_product;
  return {
    type: 'PATCH_PRODUCT',
    payload: axios.patch ('https://poswebsite.herokuapp.com/product/'+id,input,
    )
  };
};

export const deleteProduct = (input) => {
  const id=input;
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete ('https://poswebsite.herokuapp.com/product/'+id,
    )
  };
};

// export const postOrder=(input,total)=>{
//   // input.push(total)
//   // console.log("DATA INPUT",input)
//   return{
//       type: 'POST_ORDER',
//       payload:axios.post('https://poswebsite.herokuapp.com/product/order',{body: {subtotal:total,order:input}},{headers:headers})
//   }
// }
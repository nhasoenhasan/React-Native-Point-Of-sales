import axios from 'axios';

export const getProduct = (data,token) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get ('https://poswebsite.herokuapp.com/product',{params: data,headers:{"xaccess-token": token}}),
  };
};

export const postProduct = (input,token) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post ('https://poswebsite.herokuapp.com/product',input,{headers:{"xaccess-token": token}}),
  };
};

export const patchProduct = (input,token) => {
  const id=input.id_product;
  return {
    type: 'PATCH_PRODUCT',
    payload: axios.patch ('https://poswebsite.herokuapp.com/product/'+id,input,{headers:{"xaccess-token": token}})
  };
};

export const deleteProduct = (input,token) => {
  const id=input;
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete ('https://poswebsite.herokuapp.com/product/'+id,{headers:{"xaccess-token": token}})
  };
};

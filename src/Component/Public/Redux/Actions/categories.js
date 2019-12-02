import axios from 'axios';

export const getCategories = (data,token) => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get ('https://poswebsite.herokuapp.com/product/categories',{params: data,headers:{"xaccess-token": token}}),
  };
};
//

export const postCategories = (input,token) => {
  return {
    type: 'POST_CATEGORIES',
    payload: axios.post ('https://poswebsite.herokuapp.com/product/categories',input,{headers:{"xaccess-token": token}})
  };
};

export const patchCategories = (input,token) => {
  const id=input.id_categories;
  return {
    type: 'PATCH_CATEGORIES',
    payload: axios.patch ('https://poswebsite.herokuapp.com/product/categories/'+id,input,{headers:{"xaccess-token": token}})
  };
};

export const deleteCategories = (input,token) => {
  
  const id=input
  return {
    type: 'DELETE_CATEGORIES',
    payload: axios.delete ('https://poswebsite.herokuapp.com/product/categories/'+id,{headers:{"xaccess-token": token}})
  };
};
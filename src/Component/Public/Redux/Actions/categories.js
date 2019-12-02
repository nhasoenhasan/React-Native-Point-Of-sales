import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem("xaccess-token");
const headers = {
  "xaccess-token": token
};

export const getCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get ('https://poswebsite.herokuapp.com/product/categories',{params: data},{headers:headers}),
  };
};

export const postCategories = (input) => {
  return {
    type: 'POST_CATEGORIES',
    payload: axios.post ('https://poswebsite.herokuapp.com/product/categories',input),
  };
};

export const patchCategories = (input) => {
  const id=input.id_categories;
  return {
    type: 'PATCH_CATEGORIES',
    payload: axios.patch ('https://poswebsite.herokuapp.com/product/categories/'+id,input,
    )
  };
};

export const deleteCategories = (input) => {
  
  const id=input
  return {
    type: 'DELETE_CATEGORIES',
    payload: axios.delete ('https://poswebsite.herokuapp.com/product/categories/'+id,
    )
  };
};
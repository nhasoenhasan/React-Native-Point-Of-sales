import axios from 'axios';
// const token = localStorage.getItem("x-access-token");
// const headers = {
//   "xaccess-token": token
// };

export const getCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: axios.get ('https://poswebsite.herokuapp.com/product/categories',{params:
      data,
    }),
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
import axios from 'axios';


export const postRegister = (input) => {
  return {
    type: 'POST_REGISTER',
    payload: axios.post (`https://poswebsite.herokuapp.com/auth/register`,input),
  };
};

export const postLogin = (input) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post (`https://poswebsite.herokuapp.com/auth/signin`,input),
  };
};

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token
  };
};
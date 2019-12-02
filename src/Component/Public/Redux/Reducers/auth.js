import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    registerResponse: [],
    registerMessage:'',
    registerStatus:'',
    loginResponse: [],
    loginMessage:'',
    loginStatus:'',
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    asynctoken:''
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_REGISTER_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'POST_REGISTER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'POST_REGISTER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          registerMessage:action.payload.data.message,
          registerStatus:action.payload.data.status,
        };
      //-------------------------------------------------------------
      case 'POST_LOGIN_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'POST_LOGIN_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'POST_LOGIN_FULFILLED':
        const token =action.payload.data.token;
        AsyncStorage.setItem('xaccess-token',token)
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          loginMessage: action.payload.data.message,
          loginStatus:action.payload.data.status,
        };  
     
      default:
        return state;
    }
  };

  export default auth;
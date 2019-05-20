import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('', creds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item, id) => {
  return {
    type: ADD_ITEM,
    payload: item,
    id: id
  };
};

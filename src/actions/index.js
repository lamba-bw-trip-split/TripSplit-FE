import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://tripsplitbe.herokuapp.com/auth/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('https://tripsplitbe.herokuapp.com/auth/register', creds)
    .then(res => {
      console.log(res);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE });
    });
};

export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item, id) => {
  return {
    type: ADD_ITEM,
    payload: item,
    id: id
  };
};

export const FETCH_TRIPS_START = 'FETCH_TRIPS_START';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_FAILURE = 'FETCH_TRIPS_FAILURE';

export const getTrips = () => dispatch => {
  dispatch({ type: FETCH_TRIPS_START });
  axiosWithAuth()
    .get('/api/trips')
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TRIPS_SUCCESS, payload: res.data.trips });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_TRIPS_FAILURE });
    });
};

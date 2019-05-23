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

export const ADD_TRIP_START = 'ADD_TRIP_START';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

export const addTrip = trip => dispatch => {
  dispatch({ type: ADD_TRIP_START });
  axiosWithAuth()
    .post('/api/trips/addTrip', trip)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_TRIP_FAILURE });
    });
};

export const DELETE_TRIP_START = 'DELETE_TRIP_START';
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';

export const delTrip = id => dispatch => {
  dispatch({ type: DELETE_TRIP_START });
  axiosWithAuth()
    .delete(`/api/trips/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_TRIP_SUCCESS });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const ADD_EXPENSES_START = 'ADD_EXPENSES_START';
export const ADD_EXPENSES_SUCCESS = 'ADD_EXPENSES_SUCCESS';

export const addExp = (tripId, exp) => dispatch => {
  dispatch({ type: ADD_EXPENSES_START });
  axiosWithAuth()
    .post(`/api/trips/${tripId}/expenses`, exp)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};

export const DEL_EXP_START = 'DEL_EXP_START';
export const DEL_EXP_SUCCESS = 'DEL_EXP_SUCCESS';

export const delExp = (expId, tripId) => dispatch => {
  dispatch({ type: DEL_EXP_START });
  axiosWithAuth()
    .delete(`/api/trips/${tripId}/expenses/${expId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DEL_EXP_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const GET_MEMBER_START = 'GET_MEMBER_START';
export const GET_MEMBER_SUCCESS = 'GET_MEMBER_SUCCESS';

export const getMembers = id => dispatch => {
  dispatch({ type: GET_MEMBER_START });
  axiosWithAuth()
    .get(`/api/trips/${id}/members`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_MEMBER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

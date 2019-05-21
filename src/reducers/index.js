import {
  ADD_ITEM,
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions';

const initialState = {
  trips: [
    {
      name: 'chicago',
      id: 0,
      total: 100,
      activities: [
        {
          name: 'Lunch',
          whoPaid: 'James',
          price: 100,
          id: 0
        },
        {
          name: 'Cabin',
          whoPaid: 'James',
          price: 400,
          id: 1
        }
      ],
      people: [
        {
          name: 'James',
          id: 0,
          owe: '',
          paid: 0
        },
        {
          name: 'Carole',
          id: 1,
          owe: '',
          paid: 0
        }
      ]
    },
    {
      name: 'Big Bear',
      id: 1,
      total: 800,
      activities: [
        {
          name: 'Dinner',
          whoPaid: 'Andy',
          price: 100,
          id: 0
        },
        {
          name: 'Hotel',
          whoPaid: 'Lindsay',
          price: 400,
          id: 1
        }
      ],
      people: [
        {
          name: 'Andy',
          id: 0,
          owe: '',
          paid: 0
        },
        {
          name: 'Lindsay',
          id: 1,
          owe: '',
          paid: 0
        }
      ]
    }
  ],
  pastTrips: [],
  loggingIn: false,
  token: localStorage.getItem('token'),
  error: '',
  errorStatusCode: null,
  signingUp: false,
  signupMsg: '',
  signedUp: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        error: '',
        signupMsg: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        signingUp: true,
        signupMsg: '',
        signedUp: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signupMsg: 'Account successfully created!',
        signedUp: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: 'Registration failed!',
        signingUp: false,
        signedUp: false
      };
    case ADD_ITEM:
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.id) {
            trip.activities.push(action.payload);
          }
        })
      };
    default:
      return state;
  }
};

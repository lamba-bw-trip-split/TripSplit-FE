import { ADD_ITEM, LOGIN_SUCCESS, LOGIN_START } from '../actions';

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
  errorStatusCode: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
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

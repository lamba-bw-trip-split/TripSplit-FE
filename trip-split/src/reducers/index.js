import { ADD_ITEM } from '../actions';

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
  pastTrips: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        trips: state.trips.map()
      };
    default:
      return state;
  }
};

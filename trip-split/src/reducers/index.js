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
          id: 0
        },
        {
          name: 'Carole',
          id: 1
        }
      ]
    }
  ],
  pastTrips: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

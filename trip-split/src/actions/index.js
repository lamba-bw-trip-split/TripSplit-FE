export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item, id) => {
  return {
    type: ADD_ITEM,
    payload: item,
    id: id
  };
};

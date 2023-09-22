import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes';
const defaultState = {
  inputValue: '123',
  list: [1, 2],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case ADD_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      break;
    case DELETE_ITEM:
      newState.list.splice(action.value, 1);
      break;
    default:
      break;
  }
  return newState;
};

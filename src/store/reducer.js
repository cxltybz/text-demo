const defaultState = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'change_input_value':
      newState.inputValue = action.value;
      break;
    case 'add_item':
      newState.list.push(state.inputValue);
      newState.inputValue = '';
      break;
    case 'delete_item':
      newState.list.splice(action.value, 1);
      break;
    default:
      break;
  }

  return newState;
};

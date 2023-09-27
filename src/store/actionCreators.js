import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
  AXIOS_LIST,
  GET_INIT_LIST,
} from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_ITEM,
});

export const getDeleteItemAction = (value) => ({
  type: DELETE_ITEM,
  value,
});

export const getAxiosListAction = (list) => ({
  type: AXIOS_LIST,
  list,
});

export const getInitList = () => ({
  type: GET_INIT_LIST,
});

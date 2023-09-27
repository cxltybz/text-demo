import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { getAxiosListAction } from './actionCreators';

function* getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = getAxiosListAction(res.data);
    yield put(action);
  } catch (error) {
    console.log('/list.json,网络请求错误');
  }
}

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default TodoSagas;

import React, { Component } from 'react';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getAxiosListAction,
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddbtn = this.handleAddbtn.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  // 在组件挂载之后执行
  componentDidMount() {
    // 订阅store
    store.subscribe(this.handleStoreChange);
    axios.get('/list.json').then((res) => {
      const data = res.data;
      const action = getAxiosListAction(data);
      console.log(action);
      store.dispatch(action);
    });
  }
  // 输入框输入事件
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  // 更新store事件
  handleStoreChange() {
    this.setState(store.getState());
  }
  // 新增列表事件
  handleAddbtn() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  // 删除列表事件
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  // componentDidMount() {

  // }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddbtn={this.handleAddbtn}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

export default TodoList;

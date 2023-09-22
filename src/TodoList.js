import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from './store/actionCreators';
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddbtn = this.handleAddbtn.bind(this);
  }
  // 在组件挂载之后执行
  componentDidMount() {
    // 订阅store
    store.subscribe(this.handleStoreChange);
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
  render() {
    return (
      <div style={{ margin: 10 }}>
        <Input
          value={this.state.inputValue}
          placeholder="王恬恬是猪"
          style={{ width: 300, marginRight: 10 }}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleAddbtn}>
          提交
        </Button>
        <List
          bordered
          style={{ marginTop: 10, width: 300 }}
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;

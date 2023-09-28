import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleDelete, handleClick } =
    props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={() => handleDelete(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = { type: 'change_input_value', value: e.target.value };
      dispatch(action);
    },
    handleClick() {
      const action = { type: 'add_item' };
      dispatch(action);
    },
    handleDelete(value) {
      const action = { type: 'delete_item', value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ margin: 10 }}>
      <Input
        value={props.inputValue}
        placeholder="王恬恬是猪"
        style={{ width: 300, marginRight: 10 }}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleAddbtn}>
        提交
      </Button>
      <List
        bordered
        style={{ marginTop: 10, width: 300 }}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div style={{ margin: 10 }}>
//         <Input
//           value={this.props.inputValue}
//           placeholder="王恬恬是猪"
//           style={{ width: 300, marginRight: 10 }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleAddbtn}>
//           提交
//         </Button>
//         <List
//           bordered
//           style={{ marginTop: 10, width: 300 }}
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={() => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;

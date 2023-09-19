import React, { useState } from "react";
import TodoItems from "./TodoItem";
import Test from "./Test";
import axios from 'axios';
import "./style.css";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "", // 输入框数据
            list: [], // 列表数据
        };
    }
    // 输入框事件
    handleInputChange(e) {
        this.setState(() => ({
            inputValue: e.target.value,
        }));
    }
    // 提交事件
    onOk() {
        this.setState(prevState => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
        }));
    }
    // 删除事件
    handleItemDelete(index) {
        this.setState(prevState => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list };
        });
    }

      
    // 获取列表子项
    getTodoItem() {
        return this.state.list.map((item, index) => (
            <TodoItems
                cotent={item}
                index={index}
                key={index}
                deleteItem={this.handleItemDelete.bind(this)}
            />
        ));
    }
    componentDidMount(){
        axios('/api/todolist').then(()=>alert('succ')).catch(()=>alert('erro'))
    }

    render() {
        return (
            <>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <button onClick={() => this.onOk()}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
                <Test content={this.state.inputValue} />
            </>
        );
    }
}

// const TodoList = () => {
//     // 列表
//     const [list, setList] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     return (
//         <>
//             {/* 注释 */}
//             {
//                 // 单行注释
//             }
//             <div>
//                 <label htmlFor="name">内容</label>
//                 <input
//                     className="input"
//                     id="name"
//                     value={inputValue}
//                     onChange={e => setInputValue(e.target.value)}
//                 />
//                 <button
//                     onClick={() => {
//                         setList([...list, inputValue]);
//                         setInputValue("");
//                     }}
//                 >
//                     提交
//                 </button>
//             </div>
//             <ul>
//                 {list.map((item, index) => (
//                     <TodoItems
//                         key={index}
//                         content={item}
//                         index={index}
//                         onDelete={() => setList(pre => pre.splice(index, 1))}
//                     />
//                 ))}
//             </ul>
//         </>
//     );
// };

export default TodoList;

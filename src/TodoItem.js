import { Component } from "react";

// export default class TodoItems extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.props.deleteItem(this.props.index);
//     }
//     render() {
//         return <div onClick={this.handleClick}>{this.props.cotent}</div>;
//     }
// }
const TodoItems = props => {
    const { content, onDelete } = props;
    return <div onClick={onDelete}>{content}</div>;
};
export default TodoItems;

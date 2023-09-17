import { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
    render() {
        const { cotent, test } = this.props;
        return (
            <div onClick={this.handleClick}>
                {test}-{cotent}
            </div>
        );
    }
}
// const TodoItems = props => {
//     const { content, onDelete } = props;
//     return <div onClick={onDelete}>{content}</div>;
// };
TodoItems.propTypes = {
    test: PropTypes.string.isRequired,
    cotent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
};
TodoItems.defaultProps = {
    test: "hello word",
};

export default TodoItems;

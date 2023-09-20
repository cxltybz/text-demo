import React, { Component, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.nodeRef = React.createRef();
  }
  // 添加子元素过渡的事件
  handleAddItem() {
    this.setState((preState) => ({
      list: [...preState.list, 'item'],
    }));
  }

  // 显示后的颜色事件
  enterdColor() {
    const emlemnt = this.nodeRef.current;
    emlemnt.style.color = 'blue';
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => (
            <CSSTransition
              in={this.state.show}
              timeout={1000}
              classNames="fade"
              appear
              nodeRef={this.nodeRef}
              unmountOnExit
              onEntered={this.enterdColor.bind(this)}
              key={index}
            >
              <div ref={this.nodeRef}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>

        <button onClick={this.handleAddItem.bind(this)}>toggle</button>
      </Fragment>
    );
  }
}

export default App;

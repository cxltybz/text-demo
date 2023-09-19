import React, { Component, Fragment } from 'react';
import './style.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onShow() {
    this.setState(() => ({
      show: !this.state.show,
    }));
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.onShow.bind(this)}>toggle</button>
      </Fragment>
    );
  }
}

export default App;

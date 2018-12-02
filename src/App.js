import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    // setState method takes object or function as first argument.

    // eg: for Object
    // this.setState({ count: this.state.count + 1 }); or

    // eg: for function
    this.setState(oldState => ({ count: oldState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(oldState => ({ count: oldState.count - 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}> - </button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}> + </button>
      </div>
    );
  }
}

const App = () => (
  <div className="container">
    <h3>Counter App</h3>
    <hr />
    <Counter />
  </div>
);

export default App;

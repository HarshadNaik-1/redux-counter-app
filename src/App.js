import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { ct, onIncrement, onDecrement } = this.props;
    return (
      <div className="count">
        <h1>
          COUNT : <span>{ct}</span>
        </h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ct: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

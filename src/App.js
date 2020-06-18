import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionType from "./store/actions";

class App extends Component {
  render() {
    const { ct, onIncrement, onDecrement, onAdd, onSubtract } = this.props;
    return (
      <div className="count">
        <h1>
          COUNT : <span>{ct}</span>
        </h1>
        <div className="btn">
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onAdd}>Add 5</button>
          <button onClick={onSubtract}>Subtract 2</button>
        </div>
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
    onIncrement: () => dispatch({ type: actionType.INCREMENT }),
    onDecrement: () => dispatch({ type: actionType.DECREMENT }),
    onAdd: () => dispatch({ type: actionType.ADD, payload: { value: 5 } }),
    onSubtract: () =>
      dispatch({ type: actionType.SUBTRACT, payload: { value: 2 } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

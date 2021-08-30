import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const toggleCounterHandler = () => {};

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={this.decrementHandler}>Decrement</button>
//         <button onClick={this.incrementHandler}>Increment</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  toggleCounterHandler(){}
  incrementHandler(){this.props.increment()}
  decrementHandler(){this.props.decrement()}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: ()=>dispatch({type: 'increment'}),
    decrement: ()=>dispatch({type: 'decrement'})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

import { useRef } from 'react'
import classes from './Counter.module.css';
import { counterAction } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const inputRef = useRef()
  const dispatch = useDispatch()
  const IncrementHandler = () => {
    dispatch(counterAction.increment())
  };
  const IncrementByHandler = () => {
    dispatch(counterAction.increase(+inputRef.current.value))
  };
  const DecrementByHandler = () => {
    dispatch(counterAction.reduce(+inputRef.current.value))
  };
  const DecrementHandler = () => {
    dispatch(counterAction.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={ classes.counter }>
      <h1>Redux Counter</h1>
      <div className={ classes.value }>-- { counter } --</div>
      { show && <div>
        <input className={ classes.value } placeholder="please enter number" type='number' ref={ inputRef }></input>
        <button onClick={ IncrementHandler }>Increment</button>
        <button onClick={ DecrementHandler }>Decrement</button>
        <button onClick={ IncrementByHandler }>Increment By input</button>
        <button onClick={ DecrementByHandler }>Decrement By input</button>
      </div> }
      <button onClick={ toggleCounterHandler }>Toggle Counter</button>
    </main>
  );
};

export default Counter;

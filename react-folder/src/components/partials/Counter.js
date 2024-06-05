import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incby, setIncby] = useState(1);

  function increment() {
    setCount(count + incby);
  }

  function decrement() {
    setCount(count - incby);
  }

  function add() {
    setIncby(incby + 1);
  }

  function minus() {
    setIncby(incby - 1);
  }

  return (
    <div>
      <h1>Count is : {count}</h1>
      <h1>Increment by : {incby}</h1>
      <button onClick={increment}>Increment</button> |{" "}
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={add}>Add IncBy</button> |{" "}
      <button onClick={minus}>Minus IncBy</button>
    </div>
  );
};

export default Counter;
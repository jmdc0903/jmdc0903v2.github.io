import { useState } from "react";
const Calculator = () => {
  const result = 0;

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  function setNumOne(e) {
    setNum1(e.target.value);
  }

  function setNumTwo(e) {
    setNum2(e.target.value);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setNumOne(e);
          }}
          value={num1}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNumTwo(e);
          }}
          value={num2}
        />
      </form>
      <button>Add</button>
      <button>Sub</button>
      <button>Mul</button>
      <button>Div</button>

      <h1>Result: {result} </h1>
    </div>
  );
};

export default Calculator;

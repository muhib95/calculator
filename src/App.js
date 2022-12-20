import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  // const [error, setError] = useState("");
  const doMath = (mathString) => {
    try {
      const mathResult = eval(mathString);
      console.log(mathResult);
      setNumber(mathResult);
    } catch (error) {
      console.log(error);
      setNumber("Error input!");
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
        <div className="calculator-body">
      <input type="text" className="black-screen" value={number} disabled />

      <div className="calculator-buttons">
        {/* Operator buttons */}
        <button
          className="operator-button btn btn-primary"
          value="+"
          onClick={() => setNumber(number + "+")}
        >
          +
        </button>
        <button
          className="operator-button btn btn-primary"
          value="-"
          onClick={() => setNumber(number + "-")}
        >
          -
        </button>
        <button
          className="operator-button btn btn-primary"
          value="*"
          onClick={() => setNumber(number + "*")}
        >
          x
        </button>
        <button
          className="operator-button btn btn-primary"
          value="/"
          onClick={() => setNumber(number + "/")}
        >
          /
        </button>
      </div>
      <div className="calculator-numbers">
        <button
          type="button"
          value="7"
          className="btn btn-success"
          onClick={() => setNumber(number + "7")}
        >
          7
        </button>
        <button
          type="button"
          value="8"
          className="btn btn-success"
          onClick={() => setNumber(number + "8")}
        >
          8
        </button>
        <button
          type="button"
          value="9"
          className="btn btn-success"
          onClick={() => setNumber(number + "9")}
        >
          9
        </button>
        <button
          type="button"
          value="4"
          className="btn btn-success"
          onClick={() => setNumber(number + "4")}
        >
          4
        </button>
        <button
          type="button"
          value="5"
          className="btn btn-success"
          onClick={() => setNumber(number + "5")}
        >
          5
        </button>
        <button
          type="button"
          value="6"
          className="btn btn-success"
          onClick={() => setNumber(number + "6")}
        >
          6
        </button>
        <button
          type="button"
          value="1"
          className="btn btn-success"
          onClick={() => setNumber(number + "1")}
        >
          1
        </button>
        <button
          type="button"
          value="2"
          className="btn btn-success"
          onClick={() => setNumber(number + "2")}
        >
          2
        </button>
        <button
          type="button"
          value="3"
          className="btn btn-success"
          onClick={() => setNumber(number + "3")}
        >
          3
        </button>
        <button
          type="button"
          value="0"
          className="btn btn-success"
          onClick={() => setNumber(number + "0")}
        >
          0
        </button>
        <button
          type="button"
          value="="
          className="btn btn-success w-100"
          onClick={() => setNumber(number + ".")}
        >
          .
        </button>
        <button
          type="button"
          value="="
          className="btn btn-warning w-100"
          onClick={() => setNumber("")}
        >
          C
        </button>
      </div>
      <div className="equal-btn mb-1 px-3">
        <button
          type="button"
          value="="
          className="btn btn-danger w-100"
          onClick={() => doMath(number)}
        >
          =
        </button>
      </div>
    </div>
    </div>
  
  );
}

export default App;

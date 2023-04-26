import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount called");
      return count * 5;
    },
    [count]
  );

  return (
    // console.log("render");
    <div className="App">
      <h1>count :: {count}</h1>
      <h1>item::{item}</h1>
      <h1>{multiCountMemo}</h1>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItem(item * 10)}>update item</button>
    </div>
  );
}

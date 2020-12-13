import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Counter } from "./counter";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <button style={{ marginRight: 20 }} onClick={() => setCount(count + 1)}>
        react: {count}
      </button>
      <Counter count={count} onChange={setCount} />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

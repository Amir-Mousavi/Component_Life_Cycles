import React, { useState } from "react";
import ReactDOM from "react-dom";
import LifeCycle from "./LifeCycle";

import "./styles.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <LifeCycle />}
      <hr />

      <button onClick={() => setShow(false)}>Don't show it!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

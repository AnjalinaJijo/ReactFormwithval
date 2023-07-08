import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [text, setText] = useState("");

  function clickHandle(event) {
    setText(name);
    event.preventDefault();
  }

  function changeHandler(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {text} </h1>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={clickHandle}>Submit</button>
    </div>
  );
}

export default App;

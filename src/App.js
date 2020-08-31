import React from "react";

import Counter from "./containers/counter/counter";
import "./App.css";
import { useLocalStorage, useLogger } from "./hooks";


function App() {
  const [name, setName] = useLocalStorage('name', 'something')
  useLogger(name)
  return (
    <div className="App">
      <input onChange={e => setName(e.target.value)} value={name} />
    </div>
  );
}

export default App;

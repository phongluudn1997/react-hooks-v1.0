import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default Counter;

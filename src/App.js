import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('start');

    const decrementCount = () => {
        setCount(previousCount => previousCount - 1);
        setTheme('black');
    };

    const incrementCount = () => {
        setCount(previousCount => previousCount + 1);
        setTheme('green');

    };

  return (
      <div>
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <span>{theme}</span>
          <button onClick={incrementCount}>+</button>
      </div>
  );
}

export default App;

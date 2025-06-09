import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    const updatedValue = value + 1;
    setValue(updatedValue);
  }

  function handleDeccrement() {
    const updatedValue = value - 1;
    setValue(updatedValue);
  }

  function handleReset() {
    setValue(0);
  }
  return (
    <div className="card">
      <h2>Current-Value: {value}</h2>
      <button onClick={handleIncrement}>Increment1</button>
      <button onClick={handleDeccrement}>Decrement1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

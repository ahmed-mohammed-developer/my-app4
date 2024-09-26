import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function handlePlusClick() {
    //setCount((c) => {
     // return c + 1
   // })
   setCount(count + 1)
    setCount((c) => {
      return c + 1
    })
  }

  return (
    <div className="App">
      <header className="App-header">
     <h1>The Count is: {count}</h1>
     <button onClick={handlePlusClick}>+</button>
      </header>
    </div>
  );
}

export default App;

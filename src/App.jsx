import './styles.scss';
import { useState } from 'react';
import Board from './components/board';

function App() {
  const [counter, setCounter] = useState(1);
  console.log('Hello');
  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };
  return (
    <div>
      <button onClick={onBtnClick}>Click me please</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;

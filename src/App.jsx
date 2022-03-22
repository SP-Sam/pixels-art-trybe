import { useState } from 'react';
import Cell from './components/Cell';
import ClearButton from './components/ClearButton';
import ColorSquare from './components/ColorSquare';
import './styles/App.css';

const generateCells = (setClassList) => {
  const CELL_QUANTITY = 25;
  const cellList = [];

  for (let i = 1; i <= CELL_QUANTITY; i++) {
    cellList.push(<Cell key={i} setClassList={setClassList}/>);
  }

  return cellList
}

function App() {
  const colors = ['first', 'second', 'third', 'fourth'];

  const [colorClass, setColorClass] = useState('first-color');

  const getClassList = ({ target: { classList } }) => {
    setColorClass(classList[1]);
  };

  const setClassList = ({ target: { classList } }) => {
    if (classList.length === 1) {
      classList.add(colorClass);
    } else {
      const currentClasses = [...classList];
      
      if (currentClasses[1] === colorClass) {
        classList.remove(colorClass);
      } else {
        classList.remove(currentClasses[1]);
        classList.add(colorClass);
      }
    }
  };

  const clear = () => {
    const cellList = [...document.getElementsByClassName('cell')];

    cellList.forEach(({ classList }) => {
      const currentClasses = classList;

      if (classList.length === 2) {
        classList.remove(currentClasses[1]);
      }
    })
  };

  return (
    <div className="home-container">
      <header>
        <a href="https://www.linkedin.com/in/spsam/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/windows/32/ffffff/linkedin-2.png" alt="Link do linkedIn"/>
        </a>
        <h1>Pixels Art 🖌️</h1>
        <a href="https://github.com/SP-Sam/pixels-art-trybe" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/windows/32/ffffff/github.png" alt='Link do GitHub'/>
        </a>
      </header>

      <main>
        <h2>Paleta de cores 🎨</h2>

        <div className="color-palette">
          {colors.map(color => (
            <ColorSquare key={color} color={color} getClassList={getClassList}/>
          ))}
        </div>

        <h3>Cor atual</h3>
        <div className={`current-color ${colorClass}`}></div>

        <ClearButton clear={clear} />

        <div className="color-table">
          {generateCells(setClassList)}
        </div>
      </main>
    </div>
  );
}

export default App;

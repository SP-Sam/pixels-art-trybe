import Cell from './components/Cell';
import ClearButton from './components/ClearButton';
import ColorSquare from './components/ColorSquare';
import './styles/App.css';

function App() {
  const colors = [1, 2, 3, 4];

  const generateCells = () => {
    const CELL_QUANTITY = 25;
    const cellList = [];

    for (let i = 1; i <= CELL_QUANTITY; i++) {
      cellList.push(<Cell />);
    }

    return cellList
  }

  return (
    <div className="home-container">
      <header>
        <h1>Pixels Art 🖌️</h1>
      </header>

      <main>
        <h2>Paleta de cores 🎨</h2>

        <div className="color-palette">
          {colors.map(color => <ColorSquare key={color} color={color}/>)}
        </div>

        <ClearButton />

        <div className="color-table">
          {generateCells()}
        </div>
      </main>
    </div>
  );
}

export default App;

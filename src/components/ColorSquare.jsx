import '../styles/ColorSquare.css';

function ColorSquare({ color }) {
  return (
    <div className={`color-square color-${color}`}></div>
  )
}

export default ColorSquare;
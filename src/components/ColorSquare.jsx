import '../styles/ColorSquare.css';

function ColorSquare({ color, getClassList }) {
  return (
    <div
      className={`color-square ${color}-color`}
      onClick={getClassList}
    >
    </div>
  )
}

export default ColorSquare;
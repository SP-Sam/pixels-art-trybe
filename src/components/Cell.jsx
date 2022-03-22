import '../styles/Cell.css';

function Cell({ color, setClassList }) {
  return (
    <div className={"cell"} onClick={setClassList}></div>
  )
}

export default Cell;
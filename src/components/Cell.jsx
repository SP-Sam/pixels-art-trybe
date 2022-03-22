import '../styles/Cell.css';

function Cell({ setClassList }) {
  return (
    <div className="cell" onClick={setClassList}></div>
  )
}

export default Cell;
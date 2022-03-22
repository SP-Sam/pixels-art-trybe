import '../styles/ClearButton.css'

function ClearButton({ clear }) {
  return (
    <button onClick={clear}>Limpar</button>
  )
}

export default ClearButton;
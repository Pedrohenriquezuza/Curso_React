
import './Game.css'
const game = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default game
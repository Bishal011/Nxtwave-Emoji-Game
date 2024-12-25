// Write your code here.
import './index.css'

const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLevel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="card-container">
      <div className="details-container">
        <h1 className="head2">{gameStatus}</h1>
        <p className="para2">{scoreLevel}</p>
        <p className="para3">{score}/12</p>
        <button type="button" className="button2" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>

      <div className="img-container">
        <img className="img3" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo-title-container">
          <img
            className="img2"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="head1">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="para1">Score: {currentScore}</p>
            <p className="para1">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar

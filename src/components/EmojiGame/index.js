/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    this.setState(prevState => ({
      topScore: Math.max(prevState.topScore, currentScore),
      isGameInProgress: false,
    }))
  }

  clickOnEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)

    if (isEmojiPresent) {
      this.finishAndSetTopScore(clickedEmojisList.length)
    } else {
      const newClickedEmojisList = [...clickedEmojisList, id]
      if (newClickedEmojisList.length === emojisList.length) {
        this.finishAndSetTopScore(newClickedEmojisList.length)
      }
      this.setState({clickedEmojisList: newClickedEmojisList})
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojis = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojis.map(eachObj => (
          <EmojiCard
            key={eachObj.id}
            emojiDetails={eachObj}
            clickEmoji={this.clickOnEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

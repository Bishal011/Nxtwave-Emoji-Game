// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-items">
      <button type="button" className="button1" onClick={onClickEmojiCard}>
        <img className="img1" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackClick: false}

  onClickEmoji = () => {
    this.setState(prevState => ({isFeedBackClick: !prevState.isFeedBackClick}))
  }

  isFeedbackFalse = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="image"
                  />
                  <p className="emoji-name">{emoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  isFeedbackTrue = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="loveEmoji-container">
        <div className="container">
          <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji-img" />
          <h1 className="thank-you-heading">Thank You!</h1>
          <p className="loveEmoji-content">
            We will use your feedback to improve our customer support <br />
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedBackClick} = this.state

    return isFeedBackClick ? this.isFeedbackTrue() : this.isFeedbackFalse()
  }
}

export default Feedback

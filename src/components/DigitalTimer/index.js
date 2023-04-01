// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {isPlay: true, time: 25, tval: 25, seconds: 0}
  }

  start = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.timerID)
    this.setState({isPlay: true})
  }

  tick = () => {
    const {seconds, time} = this.state
    this.setState(prev => {
      if (seconds === 0) {
        return {isPlay: false, seconds: 59, time: time - 1}
      }
      return {isPlay: false, seconds: prev.seconds - 1, time: prev.time}
    })
  }

  decrease = () => {
    this.setState(prev => {
      const {isPlay} = this.state
      if (isPlay === true) {
        return {tval: prev.tval - 1, time: prev.time - 1}
      }
      return {tval: prev.tval}
    })
  }

  increase = () => {
    this.setState(prev => {
      const {isPlay} = this.state
      if (isPlay === true) {
        return {tval: prev.tval + 1, time: prev.time + 1}
      }
      return {tval: prev.tval}
    })
  }

  reset = () => {
    clearInterval(this.timerID)
    this.setState({isPlay: true, time: 25, tval: 25, seconds: 0})
  }

  render() {
    const {isPlay, time, tval, seconds} = this.state
    const fs = seconds < 9 ? `0${seconds}` : seconds

    return (
      <div className="bgContainer">
        <h1 className="heading">Digital Timer</h1>
        <div className="middileCard">
          <div className="imageCard">
            <div className="timeCard">
              <h1 className="timer">
                {time}:{fs}
              </h1>
              <p className="run">{isPlay ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="TimeContainer">
            <div className="timebtns">
              <div>
                {isPlay === true ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="icons"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                    className="icons"
                  />
                )}
                {isPlay === true ? (
                  <button
                    type="button"
                    className="startParas"
                    onClick={this.start}
                  >
                    Start
                  </button>
                ) : (
                  <button
                    type="button"
                    className="startParas"
                    onClick={this.pause}
                  >
                    Pause
                  </button>
                )}
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="icons2"
              />
              <button type="button" className="startParas" onClick={this.reset}>
                Reset
              </button>
            </div>
            <p className="timepara">Set Timer Limit</p>
            <div className="manageContainer">
              <button
                className="operation"
                type="button"
                onClick={this.decrease}
              >
                -
              </button>
              <button className="value" type="button">
                <p>{tval}</p>
              </button>
              <button
                className="operation"
                type="button"
                onClick={this.increase}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer

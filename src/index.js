import React from 'react'
import PropTypes from 'prop-types'

class SpeakText extends React.Component {
  constructor (props) {
    super(props)

    if ('speechSynthesis' in window) {
      this.speech = this.init()
    } else {
      console.warn('This browser does not support the Web Speech API speechSynthesis. More info: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API')
    }

    this.state = {
      started: false,
      playing: false
    }
  }
  componentWillUnmount () {
    this.cancel()
  }
  componentWillReceiveProps ({ pause }) {
    if (pause && this.state.playing && this.state.started) {
      return this.pause()
    }

    if (!pause && !this.state.playing && this.state.started) {
      return this.resume()
    }
  }
  shouldComponentUpdate () {
    return false
  }
  componentDidMount () {
    const events = [
      { name: 'start', action: this.props.onStart },
      { name: 'error', action: this.props.onError },
      { name: 'pause', action: this.props.onPause },
      { name: 'resume', action: this.props.onResume }
    ]

    events.forEach(e => {
      this.speech.addEventListener(e.name, e.action)
    })

    this.speech.addEventListener('end', () => {
      this.setState({ started: false })
      this.props.onEnd()
    })

    if (this.props.play) {
      this.speak()
    }
  }
  init () {
    const defaults = {
      text: '',
      volume: 1,
      rate: 1,
      pitch: 1,
      lang: 'en-US'
    }

    const options = Object.assign({}, defaults, this.props)

    let speech = new SpeechSynthesisUtterance()

    speech.text = options.text
    speech.volume = options.volume
    speech.rate = options.rate
    speech.pitch = options.pitch
    speech.lang = options.lang

    return speech
  }
  render () {
    return null
  }
  speak () {
    window.speechSynthesis.speak(this.speech)
    this.setState({ started: true, playing: true })
  }
  cancel () {
    window.speechSynthesis.cancel()
    this.setState({ started: false, playing: false })
  }
  pause () {
    window.speechSynthesis.pause()
    this.setState({ playing: false })
  }
  resume () {
    window.speechSynthesis.resume()
    this.setState({ playing: true })
  }
}

SpeakText.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}
SpeakText.defaultProps = {
  style: {},
  className: '',
}
export default SpeakText

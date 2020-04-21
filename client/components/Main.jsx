import React from 'react'

class Main extends React.Component {
  componentDidMount () {
    window.scrollTo({
      top: 1000,
      left: 4000,
      behavior: 'smooth'
    })
    setTimeout(this.playAudioFromRandom, 10000)
  }

  playAudioFromRandom = () => {
    const audioElement = document.getElementById('audio')
    const startTime = Math.floor(Math.random() * 470)
    audioElement.currentTime = startTime
    audioElement.play()
  }

  horizontalScroll = (e) => {
    e.preventDefault()
    var container = document.getElementById('container')
    var containerScrollPosition = document.getElementById('container').scrollLeft
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth'
    })
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          <video autoPlay loop className="fullScreen">
            <source src='/background.mp4' type='video/mp4'/>
          </video>
          <audio id="audio" loop src="monologue.mp3"/>
        </div>
      </div>
    )
  }
}

export default Main

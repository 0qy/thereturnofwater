import React from 'react'
import { Player, ControlBar } from 'video-react'
import autoScroll from '../scripts/autoScroll'

class Main extends React.Component {
  componentDidMount () {
    window.scrollTo({
      top: 1000,
      left: 4000,
      behavior: 'smooth'
    })
  }
  render () {
    return (
      <div className="main">
        <video autoPlay className="fullScreen">
          <source src='/background.mp4' type='video/mp4'/>
        </video>
      </div>
    )
  }
}

export default Main

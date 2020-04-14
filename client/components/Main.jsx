import React from 'react'

import Text from './Text'
import Box from './Box'

class Main extends React.Component {
  componentDidMount () {
    window.scrollTo({
      top: 1000,
      left: 4000,
      behavior: 'smooth'
    })
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
          <video autoPlay className="fullScreen">
            <source src='/background.mp4' type='video/mp4'/>
          </video>
        </div>
        <div className="parentBox">
          <Text />
          <Box />
        </div>
      </div>
    )
  }
}

export default Main

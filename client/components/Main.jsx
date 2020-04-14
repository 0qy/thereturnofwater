import React from 'react'

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
      <div className="container">
        <div className="main">
          <video autoPlay className="fullScreen">
            <source src='/background.mp4' type='video/mp4'/>
          </video>
        </div>
        <div className="content">
          <h2>just</h2>
          <br/>
          <h2>                      some</h2>
          <br/>
          <h2>                                          place</h2>
          <br/>
          <h2>                                                      holders</h2>
        </div>
        <div className="elements">
          <img id='directionDiagram' src='/images/directionDiagram.png'/>
        </div>
      </div>
    )
  }
}

export default Main

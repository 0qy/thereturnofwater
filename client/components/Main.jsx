import React from 'react'
import { Player, ControlBar } from 'video-react'

const Main = () => {
  return (
    <div className="main">
      <video autoPlay fluid className="fullScreen">
        <source src='/background.mp4' type='video/mp4'/>
        {/* <ControlBar disableCompletely={true} /> */}
      </video>
    </div>
  )
}

export default Main

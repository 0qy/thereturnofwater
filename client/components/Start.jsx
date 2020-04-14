import React from 'react'
import { Link } from 'react-router-dom'

const Start = (props) => {
  return (
    <div>
      <p>This Site Will Be Playing Audio</p>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default Start

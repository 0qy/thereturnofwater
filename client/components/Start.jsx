import React from 'react'

const Start = (props) => {
  return (
    <div className="start">
      <p>This Site Will Be Playing Audio</p>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default Start

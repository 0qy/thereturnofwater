import React from 'react'

const Start = (props) => {
  return (
    <div className="start">
      <p>This site will be playing audio.</p>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default Start

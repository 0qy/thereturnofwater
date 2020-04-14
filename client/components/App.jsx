import React from 'react'

import Start from './Start'
import Main from './Main'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainVisible: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.setState({
      mainVisible: true
    })
  }

  render () {
    return (
      <div>
        {this.state.mainVisible
          ? <Main />
          : <Start clickHandler={this.clickHandler}/>
        }
      </div>
    )
  }
}

export default App

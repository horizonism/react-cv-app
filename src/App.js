import React, { Component } from 'react'
import General from './components/General'
import Educational from './components/Educational'
import Practical from './components/Practical'

class App extends Component{
  render(){
    return(
      <div>
        < General />
        < Educational />
        < Practical />
      </div>
    )
  }
}

export default App


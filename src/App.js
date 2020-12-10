import React, { Component } from 'react'
import uniqid from 'uniqid'
import Overview from './components/Overview'

class App extends Component{
  constructor(){
    super()
    this.state = {
      task: "",
      tasks: [],
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ""
    })
    console.log(this.state.tasks)
  }

  render(){
    const view = this.state.tasks.map(item => <Overview key={uniqid()} tasks={item}/>)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="task" placeholder="Your Tasks" onChange={this.handleChange} value={this.state.task}/>
          <button>Submit</button>
        </form>
        <p>{this.state.task}</p>
        {view}
    <p>Total task : {this.state.tasks.length}</p>
      </div>
    )
  }
}

export default App


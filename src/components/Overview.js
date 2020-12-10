import React, { Component } from 'react'

class Overview extends Component{
    render(){
        return(
        <li>{this.props.tasks}</li>
        )
    }
}

export default Overview
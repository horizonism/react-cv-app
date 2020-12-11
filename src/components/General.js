import React, { Component } from 'react'

class General extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            phoneNum: "",
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
        const subBtn = document.querySelector('.genForm')
        const editBtn = document.querySelector('.genEdit')
        const genOverview = document.querySelector('.genOverview')
        genOverview.classList.remove('hide')
        subBtn.classList.add('hide')
        editBtn.classList.remove('hide')
    }
    
    showEdit = () => {
        const editBtn = document.querySelector('.genEdit')
        const subBtn = document.querySelector('.genForm')
        const genOverview = document.querySelector('.genOverview')
        genOverview.classList.add('hide')
        editBtn.classList.add('hide')
        subBtn.classList.remove('hide')
    }

    render(){
        return(
            <div>
                <h3>General Information <button className="genEdit hide" onClick={this.showEdit}>E</button></h3>
                <form onSubmit={this.handleSubmit} className="genForm">
                    <label>Your Name : </label><br/>
                    <input type="text" name="name" onChange={this.handleChange}/><br/>
                    <label>Your Email : </label><br/>
                    <input type="email" name="email" onChange={this.handleChange}/><br/>
                    <label>Your Number : </label><br/>
                    <input type="number" name="phoneNum" onChange={this.handleChange} /><br/><br/>
                    <button type="submit">Submit</button>
                </form>

                <div className="genOverview hide">
                    <h4>{this.state.name}</h4>
                    <h6>{this.state.email}</h6>
                    <h6>{this.state.phoneNum}</h6>
                </div>
            </div>
        )
    }
}

export default General
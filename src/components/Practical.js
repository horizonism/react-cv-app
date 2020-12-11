import React, { Component } from 'react'
import uniqid from 'uniqid'

class Practical extends Component{
    constructor(){
        super()
        this.state = {
            companyName: "",
            position: "",
            main: "",
            from: "",
            until: "",
            practicals: []
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
        let practical = [{
            id: uniqid(),
            companyName: this.state.companyName,
            position: this.state.position,
            main: this.state.main,
            from: this.state.from,
            until: this.state.until,
        }]

        this.setState({
            practicals: this.state.practicals.concat(practical)
        })

        e.preventDefault()
        const subBtn = document.querySelector('.pracForm')
        const editBtn = document.querySelector('.pracEdit')
        const eduOverview = document.querySelector('.pracOverview')
        eduOverview.classList.remove('hide')
        subBtn.classList.add('hide')
        editBtn.classList.remove('hide')
    }

    handleRemove = (id) => {
        const index = this.state.practicals.findIndex(item => item.id === id)
        this.setState({
            practicals: this.state.practicals.filter((_, i) => i !== index)
        })
        console.log(index)
    }
    
    showEdit = () => {
        const editBtn = document.querySelector('.pracEdit')
        const subBtn = document.querySelector('.pracForm')
        const eduOverview = document.querySelector('.pracOverview')
        eduOverview.classList.add('hide')
        editBtn.classList.add('hide')
        subBtn.classList.remove('hide')
    }
    render(){
        const practical = this.state.practicals.map(item => <li key={item.id}>
            {item.companyName} 
            {item.position} 
            {item.main} 
            {item.from} 
            {item.until} 
            <button onClick={() => this.handleEdit(item.id)}>Edit</button>
            <button onClick={() => this.handleRemove(item.id)}>Remove</button>
            </li>)
        return(
            <div>
                <h3>Practical Information <button className="pracEdit hide" onClick={this.showEdit}>E</button></h3>
                <form className="pracForm" onSubmit={this.handleSubmit}>
                    <label>Company Name</label><br/>
                    <input type="text" name="companyName" onChange={this.handleChange}/><br/>
                    <label>Position</label><br/>
                    <input type="text" name="position" onChange={this.handleChange}/><br/>
                    <label>Main Task</label><br/>
                    <input type="text" name="main" onChange={this.handleChange}/><br/>
                    <label>From</label><br/>
                    <input type="date" name="from" onChange={this.handleChange}/><br/>
                    <label>Until</label><br/>
                    <input type="date" name="until" onChange={this.handleChange}/><br/><br/>
                    <button type="submit">Submit</button><br/>
                </form>

                <div className="pracOverview">
                    {practical}
                </div>
            </div>
        )
    }
}

export default Practical
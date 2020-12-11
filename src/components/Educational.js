import React, { Component } from 'react'
import uniqid from 'uniqid'

class Educational extends Component{
    constructor(){
        super()
        this.state = {
            schoolName: "",
            title: "",
            date: "",
            educational: []
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

        let edu = [{
            id: uniqid(),
            schoolName: this.state.schoolName,
            title: this.state.title,
            date: this.state.date,
        }]

        this.setState({
            educational: this.state.educational.concat(edu)
        })

        const subBtn = document.querySelector('.eduForm')
        const editBtn = document.querySelector('.eduEdit')
        const eduOverview = document.querySelector('.eduOverview')
        eduOverview.classList.remove('hide')
        subBtn.classList.add('hide')
        editBtn.classList.remove('hide')
        console.log(this.state.educational)
    }

    handleEdit = (id) => {
        const editid = this.state.educational.find(item => item.id === id)
        console.log(editid)
    }
    
    showEdit = () => {
        const editBtn = document.querySelector('.eduEdit')
        const subBtn = document.querySelector('.eduForm')
        const eduOverview = document.querySelector('.eduOverview')
        eduOverview.classList.add('hide')
        editBtn.classList.add('hide')
        subBtn.classList.remove('hide')
    }

    render(){
    const educational = this.state.educational.map(item => <li key={item.id}>
        {item.schoolName} 
        {item.title} 
        {item.date}
        <button onClick={() => this.handleEdit(item.id)}>Edit</button>
        </li>)
        return(
            <div>
                <h3>Educational Information <button className="eduEdit hide" onClick={this.showEdit}>E</button></h3>
                <form className="eduForm" onSubmit={this.handleSubmit}>
                    <label>School</label><br/>
                    <input type="text" name="schoolName" onChange={this.handleChange}/><br/>
                    <label>Title of Study</label><br/>
                    <input type="text" name="title" onChange={this.handleChange}/><br/>
                    <label>Date of Study</label><br/>
                    <input type="date" name="date" onChange={this.handleChange}/><br/><br/>
                    <button type="submit">Submit</button><br/>
                </form>

                <div className="eduOverview">
                    {educational}
                </div>
            </div>
        )
    }
}

export default Educational
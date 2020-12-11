import React, { Component } from 'react'
import uniqid from 'uniqid'
// import EditEdu from './EditEdu'
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
        const ed = this.state.educational.findIndex(item => item.id === id)
        const editId = this.state.educational.find(item => item.id === id)
        this.showEdit()
        let edu = [{
            id: uniqid(),
            schoolName: editId.schoolName,
            title: editId.title,
            date: editId.date,
        }]
        this.setState({
            educational: this.state.educational.splice(ed, 1, edu)
        })
    }

    handleRemove = (id) => {
        const index = this.state.educational.findIndex(item => item.id === id)
        this.setState({
            educational: this.state.educational.filter((_, i) => i !== index)
        })
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
        <button onClick={() => this.handleRemove(item.id)}>Remove</button>
        </li>)
        return(
            <div>
                <h3>Educational Information <button className="eduEdit hide" onClick={this.showEdit}>E</button></h3>
                <form className="eduForm" onSubmit={this.handleSubmit}>
                    <label>School</label><br/>
                    <input type="text" name="schoolName" onChange={this.handleChange} value={this.state.schoolName}/><br/>
                    <label>Title of Study</label><br/>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                    <label>Date of Study</label><br/>
                    <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/><br/><br/>
                    <button type="submit">Submit</button><br/>
                </form>
                <div className="eduEditForm">
                </div>
                <div className="eduOverview">
                    {educational}
                </div>
            </div>
        )
    }
}

export default Educational
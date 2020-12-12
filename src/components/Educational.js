import React, { Component } from 'react'
import uniqid from 'uniqid'
class Educational extends Component{
    constructor(){
        super()
        this.state = {
            currentId: "",
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
    }

    handleEdit = (id) => {
        const eduEditForm = document.querySelector('.eduEditForm')
        eduEditForm.classList.remove('hide')
        const cur = this.state.educational.find(item => item.id === id);
        this.setState({
            currentId: id,
            schoolName: cur.schoolName,
            title: cur.title,
            date: cur.date,
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        const curId = this.state.educational.findIndex(item => item.id === this.state.currentId);
        const eduEditForm = document.querySelector('.eduEditForm')
        eduEditForm.classList.add('hide')
        let edus = {
            id: this.state.currentId,
            schoolName: this.state.schoolName,
            title: this.state.title,
            date: this.state.date,
        }
        let newArr = this.state.educational
        newArr[curId] = edus
        this.setState({
            currentId: this.state.currentId,
            educational: newArr
        })
    }

    handleRemove = (id) => {
        const index = this.state.educational.findIndex(item => item.id === id)
        let newArr = this.state.educational
        newArr.splice(index, 1)
        this.setState({
            educational: newArr
            // educational: this.state.educational.filter((_, i) => i !== index)
        })
    }
    
    showEdit = () => {
        this.setState({
            schoolName: "",
            title: "",
            date: "",
        })
        const eduEdit = document.querySelector('.eduEditForm')
        const editBtn = document.querySelector('.eduEdit')
        const subBtn = document.querySelector('.eduForm')
        const eduOverview = document.querySelector('.eduOverview')
        eduEdit.classList.add('hide')
        eduOverview.classList.add('hide')
        editBtn.classList.add('hide')
        subBtn.classList.remove('hide')
    }

    render(){
    const educational = this.state.educational.map(item => 
    <li key={item.id}>
        {item.schoolName} &nbsp;
        {item.title} &nbsp;
        {item.date} &nbsp;
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
                <div className="eduEditForm hide">
                <form onSubmit={this.handleUpdate}>
                    <label>School</label><br/>
                    <input type="text" name="schoolName" onChange={this.handleChange} value={this.state.schoolName}/><br/>
                    <label>Title of Study</label><br/>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                    <label>Date of Study</label><br/>
                    <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/><br/><br/>
                    <button type="submit">Edit</button><br/>
                </form>
                </div>
                <div className="eduOverview">
                    {educational}
                </div>
            </div>
        )
    }
}

export default Educational
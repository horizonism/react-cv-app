import React, { Component } from 'react'
import uniqid from 'uniqid'
class Practical extends Component{
    constructor(){
        super()
        this.state = {
            currentId: "",
            main: "",
            companyName: "",
            title: "",
            from: "",
            until: "",
            practical: []
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

        let prac = [{
            id: uniqid(),
            companyName: this.state.companyName,
            main: this.state.main,
            title: this.state.title,
            from: this.state.from,
            until: this.state.until,
        }]

        this.setState({
            practical: this.state.practical.concat(prac)
        })

        const subBtn = document.querySelector('.pracForm')
        const editBtn = document.querySelector('.pracEdit')
        const pracOverview = document.querySelector('.pracOverview')
        pracOverview.classList.remove('hide')
        subBtn.classList.add('hide')
        editBtn.classList.remove('hide')
    }

    handleEdit = (id) => {
        const pracEditForm = document.querySelector('.pracEditForm')
        pracEditForm.classList.remove('hide')
        const cur = this.state.practical.find(item => item.id === id);
        this.setState({
            currentId: id,
            companyName: cur.companyName,
            main: cur.main,
            title: cur.title,
            from: cur.from,
            until: cur.until
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        const curId = this.state.practical.findIndex(item => item.id === this.state.currentId);
        const pracEditForm = document.querySelector('.pracEditForm')
        pracEditForm.classList.add('hide')
        let edus = {
            id: this.state.currentId,
            companyName: this.state.companyName,
            main: this.state.main,
            title: this.state.title,
            from: this.state.from,
            until: this.state.until
        }
        let newArr = this.state.practical
        newArr[curId] = edus
        this.setState({
            currentId: this.state.currentId,
            practical: newArr
        })
    }

    handleRemove = (id) => {
        const index = this.state.practical.findIndex(item => item.id === id)
        let newArr = this.state.practical
        newArr.splice(index, 1)
        this.setState({
            practical: newArr
            // practical: this.state.practical.filter((_, i) => i !== index)
        })
    }
    
    showEdit = () => {
        this.setState({
            main: "",
            companyName: "",
            title: "",
            from: "",
            until: "",
        })
        const pracEdit = document.querySelector('.pracEditForm')
        const editBtn = document.querySelector('.pracEdit')
        const subBtn = document.querySelector('.pracForm')
        const pracOverview = document.querySelector('.pracOverview')
        pracEdit.classList.add('hide')
        pracOverview.classList.add('hide')
        editBtn.classList.add('hide')
        subBtn.classList.remove('hide')
    }

    render(){
    const practical = this.state.practical.map(item => 
    <li key={item.id}>
        {item.companyName} &nbsp;
        {item.main} &nbsp;
        {item.title} &nbsp;
        {item.from} &nbsp;
        {item.until} &nbsp;
        <button onClick={() => this.handleEdit(item.id)}>Edit</button>
        <button onClick={() => this.handleRemove(item.id)}>Remove</button>
    </li>)
        return(
            <div>
                <h3>Practical Information <button className="pracEdit hide" onClick={this.showEdit}>E</button></h3>
                <form className="pracForm" onSubmit={this.handleSubmit}>
                    <label>Company Name</label><br/>
                    <input type="text" name="companyName" onChange={this.handleChange} value={this.state.companyName}/><br/>
                    <label>Main Task</label><br/>
                    <input type="text" name="main" onChange={this.handleChange} value={this.state.main}/><br/>
                    <label>Position</label><br/>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                    <label>From</label><br/>
                    <input type="date" name="from" onChange={this.handleChange} value={this.state.from}/><br/>
                    <label>Until</label><br/>
                    <input type="date" name="until" onChange={this.handleChange} value={this.state.until}/><br/><br/>
                    <button type="submit">Submit</button><br/>
                </form>
                <div className="pracEditForm hide">
                <form onSubmit={this.handleUpdate}>
                    <label>Company Name</label><br/>
                    <input type="text" name="companyName" onChange={this.handleChange} value={this.state.companyName}/><br/>
                    <label>Main Task</label><br/>
                    <input type="text" name="main" onChange={this.handleChange} value={this.state.main}/><br/>
                    <label>Position</label><br/>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                    <label>From</label><br/>
                    <input type="date" name="from" onChange={this.handleChange} value={this.state.from}/><br/>
                    <label>Until</label><br/>
                    <input type="date" name="until" onChange={this.handleChange} value={this.state.until}/><br/><br/>
                    <button type="submit">Submit</button><br/>
                </form>
                </div>
                <div className="pracOverview">
                    {practical}
                </div>
            </div>
        )
    }
}

export default Practical
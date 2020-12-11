import React, { Component } from 'react'

class EditEdu extends Component{
    render(){
        return(
            <div>
                <form>
                    <input value={this.props.name}/>
                </form>
            </div>
        )
    }
}

export default EditEdu
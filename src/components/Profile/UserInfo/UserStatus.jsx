import React from 'react'

export default class UserStatus extends React.Component { 
state = {
    isEditing:false,
    currentInput:""
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.status != this.props.status) {
        this.setState({
            currentInput:this.props.status
        })
    }
}

editOn = () => {
    this.setState({isEditing:true})
}

editOff = () => {
    this.setState({
        isEditing:false
    })
   this.props.setStatus(this.state.currentInput)
}

setInput = (e) => {
    this.setState({
        currentInput:e.currentTarget.value
    })
}

    render() { 
    return    <div>
            <div >
            {!this.state.isEditing ? 
            <p onClick={this.editOn}>{this.props.status || 'Set Status'}</p> :
             <input onChange={this.setInput} autoFocus={true} onBlur={this.editOff}
              type="text" value={this.state.currentInput} />
            }
            </div>
        </div>
    }
}
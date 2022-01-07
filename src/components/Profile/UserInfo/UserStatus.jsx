import React from 'react'
import { useState, useEffect } from 'react'

export default function UserStatus(props) {

    const [isEditing, setIsEditing] = useState(false)
    const [currentInput, setCurrentInput] = useState('')


    useEffect(() => {
        setCurrentInput(props.status)
    }, [props.status])


    function editOn () {
        setIsEditing(true)
    }

    function editOff () {
        setIsEditing(false)
        props.setStatus(currentInput)
    }

    function setInput (e) {
        setCurrentInput(e.currentTarget.value)
    }

    return <div>
        <div >
            {!isEditing ?
                <p onClick={editOn}>Status: {props.status || 'Set Status'}</p> 
                :
                <input onChange={setInput} autoFocus={true} onBlur={editOff}
                    type="text" value={currentInput} />
            }
        </div>
    </div>
}

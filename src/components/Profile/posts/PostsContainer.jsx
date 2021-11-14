import React from 'react'
import Posts from "./Posts"
import {addPostActionCreator, registerChangesActionCreator}
from './../../../redux/reducers/profileReducer'

export default function PostsContainer(props) {
    function onGetCurrentValue() {
        props.store.dispatch(addPostActionCreator());
      }
      function onRegisterChanges(value){
        props.store.dispatch(registerChangesActionCreator(value))
      }

    return (
    <Posts
    onGetCurrentValue = {onGetCurrentValue}
    onRegisterChanges = {onRegisterChanges}
    posts={props.store.getState().ProfilePage.posts}
    currentInput = {props.store.getState().ProfilePage.currentInput} /> 
    )
}

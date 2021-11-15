import React from 'react'
import Posts from "./Posts"
import {addPostActionCreator, registerChangesActionCreator}
from './../../../redux/reducers/profileReducer'
import StoreContext from '../../../redux/contex';

export default function PostsContainer() { 
   
    return <StoreContext.Consumer>
      { (store) => {

   function onGetCurrentValue() {
        store.dispatch(addPostActionCreator());
      }
      function onRegisterChanges(value){
        store.dispatch(registerChangesActionCreator(value))
      }
    return <Posts
    onGetCurrentValue = {onGetCurrentValue}
    onRegisterChanges = {onRegisterChanges}
    posts={store.getState().ProfilePage.posts}
    currentInput = {store.getState().ProfilePage.currentInput} />
    }}
    </StoreContext.Consumer>
}

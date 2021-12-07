import React from 'react'
import {reduxForm, Field} from 'redux-form'
import postsStyles from '../posts.module.css'

function PostForm(props) {
  return  <form onSubmit={props.handleSubmit} className={postsStyles.input}>
    <h4>New Post</h4>
    <Field placeholder="What's new?!" name="postBody" component='textarea'
     type='text' cols="50" rows="2"></Field>
    <button>Post</button>
  </form>
}

const WithReduxForm = reduxForm({form:'post'})(PostForm)



export default function PostFormContainer(props) {
    const onSubmit = (postData) => {
        console.log(postData);
    }
    return <WithReduxForm onSubmit={onSubmit} />
}
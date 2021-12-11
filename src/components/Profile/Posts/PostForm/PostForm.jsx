import React from 'react'
import {reduxForm, Field} from 'redux-form'
import postsStyles from '../Posts.module.css'
import {TextArea} from '../../../FormsValidation/FieldContainers' 
import {maxLengthVal, minLengthVal, fieldRequired} from '../../../FormsValidation/FormsValidation'

const maxLength300 = maxLengthVal('post',300)
const minLength1 = minLengthVal('post',1)

function PostForm(props) {
  return  <form onSubmit={props.handleSubmit} className={postsStyles.input}>
    <h4>New Post</h4>
    <Field placeholder="What's new?!" name="postBody" component={TextArea}
     type='text' cols="50" rows="2"
     validate={[minLength1,maxLength300, fieldRequired]}></Field>
    <button>Post</button>
  </form>
}

const WithReduxForm = reduxForm({form:'post'})(PostForm)



export default function PostFormContainer(props) {
    const onSubmit = (postData) => {
        props.addPost(postData.postBody)
    }
    return <WithReduxForm onSubmit={onSubmit} />
}
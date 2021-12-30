import React, {useState} from 'react'
import {reduxForm, Field} from 'redux-form'
import postsStyles from '../Posts.module.css'
import {TextArea} from '../../../common/FormsValidation/FieldContainers' 
import {maxLengthVal, minLengthVal} from '../../../common/FormsValidation/FormsValidation'
import { getFormControlLabelUtilityClasses } from '@mui/material'

const maxLength300 = maxLengthVal('post',300)
const minLength1 = minLengthVal('post',1)

function PostForm(props) {

const [isExpanded, setIsExpanded] = useState(false)

function expand() {
setIsExpanded(true)
}
function blur() {
  setIsExpanded(false)
}

  return  <form onSubmit={props.handleSubmit} className={postsStyles.input}>
    <h4>New Post</h4>
    <Field onClick={expand} onBlur={blur} placeholder="What's new?!" name="postBody"
     component={TextArea} type='text' cols="80" rows={isExpanded ? '3' : "1"}
     validate={[minLength1,maxLength300]}></Field>
    <button disabled={props.pristine || props.submitting}>Post</button>
  </form>
}

const WithReduxForm = reduxForm({form:'post'})(PostForm)



export default function PostFormContainer(props) {
    const onSubmit = (postData) => {
        props.addPost(postData.postBody)
    }
    return <WithReduxForm onSubmit={onSubmit} />
}
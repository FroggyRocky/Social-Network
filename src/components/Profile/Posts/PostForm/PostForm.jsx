import React, {useState} from 'react'
import {reduxForm, Field} from 'redux-form'
import styles from '../Posts.module.css'
import {TextArea} from '../../../common/FormsValidation/FieldContainers' 
import {maxLengthVal, minLengthVal} from '../../../common/FormsValidation/FormsValidation'

const maxLength300 = maxLengthVal('post',300)
const minLength1 = minLengthVal('post', 1)

function PostForm(props) {

const [isExpanded, setIsExpanded] = useState(false)


function expand() {
setIsExpanded(true)
}

  return  <form  onSubmit={props.handleSubmit} className={styles.input}>
    <h4>New Post</h4>
    <Field onClick={expand} placeholder="What's new?!" name="postBody"
     component={TextArea} type='text' cols="80" rows={isExpanded ? '3' : "1"}
     validate={[minLength1,maxLength300]}></Field>
  <button onClick={() => {  setIsExpanded(false)}} disabled={props.pristine || props.submitting}>Post</button> 
  </form>
}

const WithReduxForm = reduxForm({form:'Post'})(PostForm)



export default function PostFormContainer(props) {

    const onSubmit = (postData) => {
      if(postData) {
        props.addPost(postData.postBody)
        props.reset('post')

      }
    }
    return <WithReduxForm onSubmit={onSubmit} />
}
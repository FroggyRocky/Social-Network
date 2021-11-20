const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_CHAT_INPUT = 'UPDATE-CHAT-INPUT'
const initialState = {
  dialogues: [
    {
      name: 'Erlic Bachman',
      id: 1,
      avatar: 'https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg'
    },
    {
      name: 'Gilfoyle',
      id: 2,
      avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/silicon-valley-Gilfoyle---s-10-Most-Badass-Quotes-featured-image.jpg'
    }
  ],
  messages: [
    { text: 'Hey', id: 1 },
    { text: 'Hey!', id: 2 },
    { text: 'Do you still study programming', id: 3 },
    { text: 'Of course', id: 4 }
  ],
  currentInput: ""
}
const chatReducer = (state = initialState, action) => {
switch(action.type) {
  case ADD_MESSAGE:
return {
      ...state,
      messages:[...state.messages, {text:state.currentInput, id:state.messages.length +1}],
      currentInput:''
    }
   
    case UPDATE_CHAT_INPUT:
   return {
   ...state,
   currentInput:action.textValue
 }  
    default: 
    return state;
}
}
export default chatReducer

///Action Creators
export const addMessageActionCreator = () => {
    return ({type:'ADD-MESSAGE'})
}
export const registerChangesActionCreator = (value) => {
    return ({type:'UPDATE-CHAT-INPUT', textValue:value})
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_CHAT_INPUT = 'UPDATE-CHAT-INPUT'
const initialState = {
  dialogues: [
    {
      name: 'Erlic Bachman',
      id: 2,
      avatar: 'https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg'
    },
    {
      name: 'Gilfoyle',
      id: 3,
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
    let newMessage = {
      text: state.currentInput,
      id: state.messages.length + 1
    };
    let newState = {...state};
    newState.messages = [...state.messages]
    newState.messages.push(newMessage);
    newState.currentInput = "";
    return newState;
    case UPDATE_CHAT_INPUT:{
let newState = {...state} 
 newState.currentInput = action.textValue;
    return newState;
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

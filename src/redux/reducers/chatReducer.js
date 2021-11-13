

const chatReducer = (state, action) => { 
if (action.type === 'ADD-MESSAGE') {
    let newMessage = {
      text: state.currentInput,
      id: state.messages.length + 1
    };
    state.messages.push(newMessage);
    state.currentInput = "";
  } else if (action.type === 'UPDATE-CHAT-INPUT') {
    state.currentInput = action.textValue;
  }
return state
}

export default chatReducer

///Action Creators
export const addMessageActionCreator = () => {
    return ({type:'ADD-MESSAGE'})
}
export const registerChangesActionCreator = (value) => {
    return ({type:'UPDATE-CHAT-INPUT', textValue:value})
}

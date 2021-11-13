
 const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
    let newPost = {
      text: state.currentInput,
      id: state.posts.length + 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
    };
    state.posts.push(newPost);
    state.currentInput = "";
  } else if (action.type === 'UPDATE-POST-INPUT') {
    state.currentInput = action.textValue;
  }
return state
}

///Action Creators
export const addPostActionCreator = () => {
    return ({type:'ADD-POST'})
}
export const registerChangesActionCreator = (value) => {
    return ({type:'UPDATE-POST-INPUT', textValue:value})
}
export default profileReducer;
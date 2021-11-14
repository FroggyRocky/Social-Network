
 const ADD_POST = 'ADD-POST';
 const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
 const initialState =  {
    posts: [
      {
        text: 'Hanging out in my lab as always, peace!',
        id: 1,
        avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
      }
    ],
    currentInput: ""
  } 
 const profileReducer = (state = initialState, action) => {
   switch(action.type) {
     case ADD_POST: 
     let newPost = {
      text: state.currentInput,
      id: state.posts.length + 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
    };
    state.posts.push(newPost);
    state.currentInput = "";
    return state
    case UPDATE_POST_INPUT:
    state.currentInput = action.textValue;
    return state
    default:
    return state  
   }

}

///Action Creators
export const addPostActionCreator = () => {
    return ({type:'ADD-POST'})
}
export const registerChangesActionCreator = (value) => {
    return ({type:'UPDATE-POST-INPUT', textValue:value})
}
export default profileReducer;

 const ADD_POST = 'ADD-POST';
 const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
 const initialState =  {
   users: [
     {
       id:1,
       backImg: "https://www.wallpapers.net/free-download-iron-man-movie-wallpaper-for-desktop-mobiles/download/1500x500.jpg",
       avatar:"https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg",
       name:'Tony Stark',
       location:'Planet Earth',
       education:'Technical Institute of Texas State(TITS)',
       age: '30',
       hobbies:'Create stuff, hang out in my lab'
      }
    ],
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
     case ADD_POST: {
     let newPost = {
      text: state.currentInput,
      id: state.posts.length + 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
    };
    let newState = {...state}
    newState.posts = [...state.posts]
    newState.posts.push(newPost);
    newState.currentInput = "";
    return newState
  }
    case UPDATE_POST_INPUT:
    let newState = {...state}
    newState.currentInput = action.textValue;
    return newState
    default:
    return state  
   }

}

///Action Creators
export const addPostActionCreator = () => {
    return ({type:ADD_POST})
}
export const registerChangesActionCreator = (value) => {
    return ({type:UPDATE_POST_INPUT, textValue:value})
}
export default profileReducer;
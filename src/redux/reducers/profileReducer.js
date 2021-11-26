const ADD_POST = 'ADD-POST';
 const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
 const GET_USER_PROFILE = 'GET-USER-PROFILE'
 const GET_BACK_HOME = 'GET-BACK-HOME'
 const initialState =  {
   defaultProfile: {
     userId:1,
      aboutMe:'Create stuff, hang out in my lab',
      fullName:'Tony Stark',
       location:'Planet Earth',
       education:'Technical Institute of Texas State(TITS)',
       age: '30',
      contacts: {
        github:'https://github.com/FroggyRocky',
      },
       photos: {
       large: "https://www.wallpapers.net/free-download-iron-man-movie-wallpaper-for-desktop-mobiles/download/1500x500.jpg",
       small:"https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg"
       }
   },
   posts: [
      {
        text: 'Hanging out in my lab as always, peace!',
        id: 1,
        avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
      }
    ],
    userProfileData:null,
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

  return {
      ...state,
      posts:[...state.posts, {...newPost}],
      currentInput: ''
    }
    case UPDATE_POST_INPUT:
    return {
      ...state,
      currentInput:action.textValue
    }
    case GET_USER_PROFILE: 
    return {
      ...state,
      userProfileData:action.userProfileData
    }
    case GET_BACK_HOME: 
    return {
      ...state,
      userProfileData:null
    }
    default:
    return state  
   }

}

///Action Creators
const onAddPostActionCreator = () => {
    return ({type:ADD_POST})
}
const onRegisterChangesActionCreator = (value) => {
    return ({type:UPDATE_POST_INPUT, textValue:value})
}

const onGetUserProfileData = (userProfileData) => {
  return {type:GET_USER_PROFILE, userProfileData}
}

const onHomeClick = () => ({type:GET_BACK_HOME})

export {onAddPostActionCreator,onGetUserProfileData,onRegisterChangesActionCreator, onHomeClick}
export default profileReducer;
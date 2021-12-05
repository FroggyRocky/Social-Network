import {ProfileAPI} from '../../api/api'
 
 const ADD_POST = 'ADD-POST';
 const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';
 const GET_USER_PROFILE = 'GET-USER-PROFILE'
 const GET_BACK_HOME = 'GET-BACK-HOME'
 const LOAD_CURRENT_PROFILE_DATA = "LOAD-CURRENT-PROFILE-DATA"
 const GET_PROFILE_STATUS = 'GET-PROFILE-STATUS'
 const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

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
    currentUserProfileData:null,
    currentProfileStatus:"",
    currentInput: "",
    isProfileLoading:false
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
      currentUserProfileData:action.userProfileData
    }
    case LOAD_CURRENT_PROFILE_DATA: 
    return {
      ...state, 
      isProfileLoading:!state.isProfileLoading
    }
    case GET_PROFILE_STATUS: 
    return {
      ...state,
      currentProfileStatus:action.status
    }
    case SET_PROFILE_STATUS: 
      return {
        ...state,
        currentProfileStatus:action.status
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

const loadCurrentUserProfileData = () => ({type:LOAD_CURRENT_PROFILE_DATA})

const getStatus = (status) => ({type:GET_PROFILE_STATUS, status})

const setStatus = (status) => ({type:SET_PROFILE_STATUS, status})

export {onAddPostActionCreator, onRegisterChangesActionCreator,
loadProfile, getProfileStatus,setProfileStatus}
export default profileReducer;


const loadProfile = (idParam) => {
  return (dispatch) => {
    dispatch(loadCurrentUserProfileData())
        !idParam && dispatch(loadCurrentUserProfileData())
        ProfileAPI.getProfile(idParam)
            .then((data) => { 
            dispatch(loadCurrentUserProfileData())
            dispatch(onGetUserProfileData(data))
            })
  }
}

const getProfileStatus = (id) => {
  return (dispatch) => {
    ProfileAPI.getProfileStatus(id)
    .then((res) => {
      dispatch(getStatus(res.data))
    })
  }
}

const setProfileStatus = (status) => { 
  return (dispatch) => {
    ProfileAPI.setProfileStatus(status)
    .then((res) => {
      res.data.resultCode === 0 && dispatch(setStatus(status))
    })
  }
}
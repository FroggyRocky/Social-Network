import {ProfileAPI} from '../../api/api'
 
 const ADD_POST = 'social-network/reducers/profileReducer/ADD-POST';
 const GET_USER_PROFILE = 'social-network/reducers/profileReducer/GET-USER-PROFILE'
 const LOAD_CURRENT_PROFILE_DATA = "social-network/reducers/profileReducer/LOAD-CURRENT-PROFILE-DATA"
 const GET_PROFILE_STATUS = 'social-network/reducers/profileReducer/GET-PROFILE-STATUS'
 const SET_PROFILE_STATUS = 'social-network/reducers/profileReducer/SET-PROFILE-STATUS'
 const SET_PHOTO = 'social-network/reducers/profileReducer/SET-PHOTO'
 const DELETE_POST = "social-network/reducers/profileReducer/DELETE-POST"
 const LIKE_POST  ="social-network/reducers/profileReducer/LIKE-POST"
 const DISLIKE_POST = "social-network/reducers/profileReducer/DISLIKE-POST"
 

 const initialState =  {
   posts: [
      {
        text: 'Hanging out in my lab as always, peace!',
        id: 1,
        avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`,
        likes:0,
        isLiked:false
      }
    ],
    currentUserProfileData:null,
    currentProfileStatus:"",
    currentInput: "",
    isProfileLoading:false
  }

  export default function profileReducer (state = initialState, action) {
   switch(action.type) {
     
     case ADD_POST: 
     let newPost = {
      text: action.postText,
      id: state.posts.length + 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`,
      likes:0,
      isLiked:false
    };
  return {
      ...state,
      posts:[...state.posts, {...newPost}],
      currentInput: ''
    }
  case DELETE_POST: 
  return {
    ...state, 
    posts:state.posts.filter((p) => {
      return p.id !== action.id
    })
  }
    case LIKE_POST: 
    return {
      ...state,
      posts: state.posts.map( el => {
        if(el.id === action.id) {
          return {...el, likes:el.likes +1, isLiked:true, }
        }
      else {
        return el
      }
      }) 
    }
    case DISLIKE_POST: 
    return {
      ...state,
      posts: state.posts.map( el => {
        if(el.id === action.id) {
          return {...el, likes:el.likes - 1, isLiked: false}
        } else {
          return el
        }
      })
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
      case SET_PHOTO:
        return {
          ...state, 
          currentUserProfileData: {...state.currentUserProfileData, photos:action.photos}

        }
    
    default:
    return state  
   }

}

///Action Creators
const addPost = (postText) => ({type:ADD_POST, postText})

export const deletePostAC = (id) => ({type:DELETE_POST, id})

const getUserProfileData = (userProfileData) => ({type:GET_USER_PROFILE, userProfileData})

const loadingCurrentUserProfileData = () => ({type:LOAD_CURRENT_PROFILE_DATA})

const getStatus = (status) => ({type:GET_PROFILE_STATUS, status})

const setStatus = (status) => ({type:SET_PROFILE_STATUS, status})

const setPhotoSuccess = (photos) => ({type:SET_PHOTO, photos})


const likePost = (id) => ({type:LIKE_POST, id})

const dislikePost = (id) => ({type:DISLIKE_POST, id})

const loadCurrentProfile = (idParam) => {
  return (dispatch) => {
    dispatch(loadingCurrentUserProfileData())
        !idParam && dispatch(loadingCurrentUserProfileData())
        ProfileAPI.getProfile(idParam)
            .then((data) => {
            dispatch(loadingCurrentUserProfileData())
            dispatch(getUserProfileData(data))
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

const setPhoto = (photo) => {
  return async (dispatch) => {
    let response = await ProfileAPI.setPhoto(photo)
    if(response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos));
    }
  }
}

const deletePost = (id) => {
  return (dispatch) => {
    dispatch(deletePostAC(id))
  }
}

const likeDislikePost = (isLiked,id) => {
  return (dispatch) => {
      if(!isLiked) {
          dispatch(likePost(id))
      }
    else if (isLiked) {
      dispatch(dislikePost(id))
    }
}
}

export {loadCurrentProfile, getProfileStatus,setProfileStatus, setPhoto,
addPost, likePost, dislikePost, likeDislikePost, deletePost}
const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const GET_USERS = "GET-USERS"

const initialState = {
    users: [],
searchInput: ""
}


 const usersReducer = (state=initialState, action) =>{
switch(action.type) {
case FRIEND_UNFRIEND: 
    return {
      ...state,
      users: state.users.map((el) => {
      if (action.id === el.id) {
          return {...el, followed:!el.followed}
        } else {return {...el}}
      })
    }
    case GET_USERS:
      return {
        ...state,
        users:[...state.users, ...action.users]
      }
    default:
      return state
}
}


const friendUnfriendAC = (id) => {
  return {
    type:FRIEND_UNFRIEND,
    id:id }
}

const getUsersAC = (users) => {
  return {
    type:GET_USERS,
    users:users
  }
}

export default usersReducer;
export {friendUnfriendAC, getUsersAC}
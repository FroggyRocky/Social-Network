const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const GET_USERS = "GET-USERS"
const REGISTER_CHANGES = 'REGISTER-CHANGES'
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
          return {
            ...el, followed:!el.followed
          }
        } else { return {
          ...el
        }}
      })
    }
    case GET_USERS:
      return {
        ...state,
        users:[...state.users, ...action.users]
      }
    case REGISTER_CHANGES: 
    return {
      ...state,
      searchInput:action.textValue
    }
    default:
      return state
}
}


const addFriendAC = (id) => {
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

const registerChangesAC = (value) => {
return {
  type:REGISTER_CHANGES,
  textValue: value
}
}

export default usersReducer;
export {addFriendAC, getUsersAC, registerChangesAC }
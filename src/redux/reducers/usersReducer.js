const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const GET_USERS = "GET-USERS"
const REGISTER_CHANGES = 'REGISTER-CHANGES';
const GET_TOTAL_USERS = "GET-TOTAL-USERS"
const SHOW_MORE_USERS = 'SHOW-MORE-USERS'

const initialState = {
    users: [],
totalUsersCount:0,
portionCount:5,
currentPage:1,
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
    case GET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount:action.totalUsersCount
      }
      case SHOW_MORE_USERS:
        return {
          ...state,
          currentPage:state.currentPage + 1,
          users:[...state.users, ...action.newUsers]
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

const getTotalUsersAC = (totalUsersCount) => {
return {
  type:GET_TOTAL_USERS,
  totalUsersCount
}
}

export const showMoreAC = (newUsers) => {
  return {
    type:SHOW_MORE_USERS,
    newUsers
  }
}

export default usersReducer;
export {addFriendAC, getUsersAC, registerChangesAC, getTotalUsersAC}
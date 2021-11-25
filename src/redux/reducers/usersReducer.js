const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const GET_USERS = "GET-USERS"
const REGISTER_CHANGES = 'REGISTER-CHANGES';
const GET_TOTAL_USERS = "GET-TOTAL-USERS"
const SHOW_MORE_USERS = 'SHOW-MORE-USERS'
const IS_LOADING_MAIN = 'IS-LOADING-MAIN'
const IS_LOADING_SHOW_MORE = 'IS-LOADING-SHOW-MORE'

const initialState = {
    users: [],
totalUsersCount:0,
portionCount:5,
currentPage:1,
searchInput: "",
isLoading:false,
isLoadingShowMore:false
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
      case IS_LOADING_MAIN:
      return {
        ...state,
        isLoading:!state.isLoading
      }
      case IS_LOADING_SHOW_MORE:
        return {
          ...state,
          isLoadingShowMore:!state.isLoadingShowMore
        }

    default:
      return state
}
}


const addFriendAC = (id) => ({type:FRIEND_UNFRIEND, id})

const getUsersAC = (users) => ({type:GET_USERS, users:users})

const registerChangesAC = (value) => ({type:REGISTER_CHANGES,textValue:value})

const getTotalUsersAC = (totalUsersCount) => ({type:GET_TOTAL_USERS,totalUsersCount})

const showMoreAC = (newUsers) => ({type:SHOW_MORE_USERS, newUsers})

const isLoadingAC = () => ({type:IS_LOADING_MAIN})

const isLoadingShowMoreAC = () => ({type:IS_LOADING_SHOW_MORE})

export default usersReducer;
export {addFriendAC, getUsersAC, registerChangesAC, getTotalUsersAC,
   showMoreAC, isLoadingAC, isLoadingShowMoreAC}
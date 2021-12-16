import {UsersAPI} from '../../api/api'

const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const GET_USERS = "GET-USERS"
const REGISTER_CHANGES = 'REGISTER-CHANGES';
const GET_TOTAL_USERS = "GET-TOTAL-USERS"
const SHOW_MORE_USERS = 'SHOW-MORE-USERS'
const IS_LOADING_MAIN = 'IS-LOADING-MAIN'
const IS_LOADING_SHOW_MORE = 'IS-LOADING-SHOW-MORE'
const IS_FOLLOWING = 'IS_FOLLOWING'
const initialState = {
  users: [],
  totalUsersCount: 0,
  portionCount: 5,
  currentPage: 1,
  searchInput: "",
  isLoading: false,
  isLoadingShowMore: false,
  disabledButtons: [],
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FRIEND_UNFRIEND:
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.id === el.id) {
            return {
              ...el, followed: !el.followed
            }
          } else {
            return {
              ...el
            }
          }
        })
      }
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case REGISTER_CHANGES:
      return {
        ...state,
        searchInput: action.textValue
      }
    case GET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case SHOW_MORE_USERS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        users: [...state.users, ...action.newUsers]
      }
    case IS_LOADING_MAIN:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case IS_LOADING_SHOW_MORE:
      return {
        ...state,
        isLoadingShowMore: !state.isLoadingShowMore
      }
    case IS_FOLLOWING:
      return {
        ...state,
        disabledButtons: action.isFollowing ? [...state.disabledButtons, action.id]
          : state.disabledButtons.filter(id => id != action.id)
      }
    default:
      return state
  }
}


const onAddFriend = (id) => ({ type: FRIEND_UNFRIEND, id })

const onGetUsers = (users) => ({ type: GET_USERS, users: users })

const onRegisterChanges = (value) => ({ type: REGISTER_CHANGES, textValue: value })

const onGetTotalUsers = (totalUsersCount) => ({ type: GET_TOTAL_USERS, totalUsersCount })

const onShowMore = (newUsers) => ({ type: SHOW_MORE_USERS, newUsers })

const onIsLoadingMain = () => ({ type: IS_LOADING_MAIN })

const onIsLoadingShowMore = () => ({ type: IS_LOADING_SHOW_MORE })

const isFollowing = (id, isFollowing) => ({ type: IS_FOLLOWING, id, isFollowing })

const loadUsers = (currentPage, portionCount) => {
  return (dispatch) => {
    dispatch(onIsLoadingMain())
    UsersAPI.getUsers(currentPage, portionCount)
        .then((data) => {
            dispatch(onIsLoadingMain())
            dispatch(onGetUsers(data));
            dispatch(onGetTotalUsers(data.totalCount))
        })
  }
}

const showMoreUsers = (currentPage, portionCount) => {
  return (dispatch) => {
    dispatch(onIsLoadingShowMore())
    UsersAPI.getUsers(currentPage + 1, portionCount)
        .then((data) => {
            dispatch(onIsLoadingShowMore())
            dispatch(onShowMore(data))
        })
  }
}


const friendUnfriend = (id, isFollowed) => {
  return (dispatch) => {
    dispatch(isFollowing(id, true))
    if (isFollowed) {
        UsersAPI.unfriend(id)
            .then((res) => { 
                res.resultCode === 0 && dispatch(onAddFriend(id))
                dispatch(isFollowing(id, false))
            })
    } else if (!isFollowed) {
        UsersAPI.friend(id)
            .then((res) => {
                res.resultCode === 0 && dispatch(onAddFriend(id))
                dispatch(isFollowing(id, false))
            })
    }
  }
}

export { onRegisterChanges, loadUsers, showMoreUsers, friendUnfriend }
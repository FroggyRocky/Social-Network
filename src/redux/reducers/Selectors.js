import { createSelector } from "reselect";

//Profile Component
const getStatusS = (state) => {
    return state.ProfilePage.currentProfileStatus
}

///Users Component
const getUsersS = (state) => {
    return state.UsersPage.users
}
const totalUsersCountS = (state) => {
   return  state.UsersPage.totalUsersCount
}

const currentPageS = (state) => {
    return state.UsersPage.currentPage
}

export {getStatusS, getUsersS, totalUsersCountS,currentPageS}
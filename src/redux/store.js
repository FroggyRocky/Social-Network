import {createStore, combineReducers} from 'redux'
import  profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer';
import sideBarReducer from './reducers/sideBarReducer'
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
    ProfilePage:profileReducer,
    ChatPage:chatReducer,
    UsersPage:usersReducer,
    SideBarPage:sideBarReducer
})
const store = createStore(reducers)

export default store
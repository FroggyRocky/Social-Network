import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk';
import  profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer';
import sideBarReducer from './reducers/sideBarReducer'
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
    ProfilePage:profileReducer,
    ChatPage:chatReducer,
    UsersPage:usersReducer,
    SideBarPage:sideBarReducer,
    UserAuth:authReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.state = store;

export default store
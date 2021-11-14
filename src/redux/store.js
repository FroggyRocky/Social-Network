import {createStore, combineReducers} from 'redux'
import  profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer';
import sideBarReducer from './reducers/sideBarReducer'
const reducers = combineReducers({
    ProfilePage:profileReducer,
    ChatPage:chatReducer,
    SideBarPage:sideBarReducer
})
const store = createStore(reducers)

export default store
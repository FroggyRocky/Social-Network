import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const GET_LOGGED_USER_DATA = 'GET-LOGGED-USER-DATA';

const initialState = {
email:null,
id:null,
login:null,
isLogged:false
}

export default function authReducer (state = initialState, action) { 

switch (action.type) {
    case GET_LOGGED_USER_DATA:
        return {
            ...state, 
            ...action.userData,
            isLogged:action.isLogged
        }
    default:
        return state

}

}

const authUserData = (isLogged, email,id,login) => 
({type:GET_LOGGED_USER_DATA, isLogged, userData:{email,id,login}})


const toAuth = () => {
  return  (dispatch) => {
        return authAPI.auth()
            .then((response) => { 
                if (response.resultCode === 0) {
                    let { email, id, login } = response.data
                    dispatch(authUserData(true,email, id, login))
                } })
    }}

    const logIn = (email, pass, remember) => {
        return (dispatch) => {
            authAPI.login(email,pass,remember)
            .then((res) => { 
            if(res.data.resultCode === 0) {
                dispatch(toAuth())
            } else if(res.data.resultCode === 1 && res.data.messages.length > 0) {
                dispatch(stopSubmit('Login',{_error:res.data.messages[0]}))
            } else {
                dispatch(stopSubmit('Login', {_error:'Something went wrong, try one more time'}))
            }
            })
        }
    }

    const logOut = () => {
        return (dispatch) => {
            authAPI.logout()
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(authUserData(false,null,null,null))
                }
            })
        }
    }


    
export {toAuth, logIn, logOut};
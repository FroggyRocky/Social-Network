import { authAPI } from "../../api/api";

const GET_LOGGED_USER_DATA = 'GET-LOGGED-USER-DATA';

const initialState = {
email:null,
id:null,
login:null,
isLogged:false
}

const authReducer = (state = initialState, action) => { 

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

export default authReducer
export {toAuth, logIn, logOut};

const toAuth = () => {
    return (dispatch) => {
        authAPI.auth()
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
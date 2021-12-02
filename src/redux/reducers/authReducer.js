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
            isLogged:true
        }
    default:
        return state

}

}

const authUserData = (email,id,login) => 
({type:GET_LOGGED_USER_DATA, userData:{email,id,login}})

export default authReducer
export {toAuth};

const toAuth = ()=> {
    return (dispatch) => {
        authAPI()
            .then((response) => { 
                if (response.resultCode === 0) {
                    let { email, id, login } = response.data
                    dispatch(authUserData(email, id, login))
                } })
    }}
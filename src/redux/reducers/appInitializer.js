import { toAuth } from "./authReducer"
import {loadCurrentProfile, getProfileStatus} from './profileReducer'
const APP_INITIALIZE = 'APP-INITIALIZE'

const initialState = {
    isInitialized:false
}

 export default function appInitializer(state=initialState, action) {
    switch (action.type) {
        case APP_INITIALIZE: 
        return {
            ...state, 
            isInitialized:action.isInitialized
        }
        default:
            return state
    }
}

const initializeAC = (isInitialized) => ({type:APP_INITIALIZE, isInitialized})


 const initialize = () => {
    return (dispatch) => {
         const authPromise = dispatch(toAuth())
         Promise.all([authPromise])
        .then(() =>  {
            dispatch(initializeAC(true))
        })
        
    }
}



export {initialize}
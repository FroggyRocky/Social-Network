// import * as axios from 'axios'

// export const getUsers = (currentPage, portion) => {
//    return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${portion}`)
//     .then((response) => {
//         return response.data.items
//     })
// }

// export const auth = () => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//             withCredentials: true
//         })
//         .then((response) => {
//             return response.data.data
//         })
// }

// export const getProfile = (id) => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
// }

// export const friend = (id) => {
//     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
//         withCredentials:true,
//         headers: {
//         ///API-KEY: enter api key
//         }
//     })
// }

// export const unfrined = (id) => {
//     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
//         withCredentials:true,
//         header:{
//         ///API-KEY: enter api key
//         }
//     })
// }
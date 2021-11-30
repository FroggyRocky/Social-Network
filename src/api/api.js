import * as axios from 'axios'

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ac15babd-c67e-489a-8f38-19f7667985bf'
    }

})



export const UsersAPI = {
    getUsers(currentPage, portion) { 
    return  instance.get(`users?page=${currentPage}&count=${portion}`)
    .then(response => response.data.items)},

    friend(id) {
    return instance.post(`follow/${id}`)},

    unfriend(id) {
    return instance.delete(`follow/${id}`)}


 }

export const authAPI = () => {
     return instance.get(`/auth/me`) 
        .then(response => response.data)
    }

export const getProfile = (id) => {
    return instance.get(`profile/${id}`)
    .then((response) => {
        return response.data
    })

}



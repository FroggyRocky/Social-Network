
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
    .then(response => response.data)},

    friend(id) {
    return instance.post(`follow/${id}`)
        .then(res => res.data)
},

    unfriend(id) {
    return instance.delete(`follow/${id}`)
    .then(res => res.data) 
}

 }

export const authAPI = {
    auth(){ 
        return instance.get(`/auth/me`) 
        .then(response => response.data)
    },
    login(email, pass, remember,captcha){
        return  instance.post('auth/login',
         {email:email, password:pass, remember:remember, captcha:captcha})
    },
    logout(){
        return instance.delete('auth/login')
    }
    }


export const ProfileAPI = {

getProfile (id) {
    return instance.get(`profile/${id}`)
    .then((response) => {
        return response.data
    })
},
getProfileStatus(id) {
    return instance.get(`profile/status/${id}`)
},
setProfileStatus(status){
    return instance.put('profile/status', {status})
},

setPhoto(photo) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put('profile/photo', formData, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    } )
},
setProfileData(data) {
    return instance.put('profile', data)
}
}

export const SecurityAPI = {
  getCaptchaURL() {
       return instance.get('security/get-captcha-url')
    }
}
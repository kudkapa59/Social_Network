import axios from "axios";

//DAL level

const instance = axios.create({ //creation of instance for this api
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0602a2ec-c0fb-47e8-8212-99a4096f9834'
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`  //adds address to the baseUrl's end
        ).then(response => {
            return response.data
        })  //promise
    },

    unfollow(user_id) {
        return instance.delete(`follow/${user_id}`)
            .then(response => {
                return response.data
            })
    },

    follow(user_id) {
        return instance.post(`follow/${user_id}`, {})
            .then(response => {
                return response.data
            })
    },

    login(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    getProfile(user_id){
        return instance.get(`profile/${user_id}`)
            .then(response => {
                return response.data
            })
    }
}
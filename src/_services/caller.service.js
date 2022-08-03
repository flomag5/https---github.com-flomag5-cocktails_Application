/** Import modules */

import axios from 'axios'
import { accountService } from './account.service'

import router from '@/router'

import store from '@/store'

const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

Axios.interceptors.request.use(request => {

    // Si connecté on ajoute le token dans l'entête
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

Axios.interceptors.response.use(response => {
    return response
}, error => {


    if (error.response.status == 401) {
        accountService.logout()
        router.push('/login')
    }
})


Axios.interceptors.response.use(response => {
    return response
}, error => {


    if (!error.response) {
        // erreur réseau
        store.commit('displayNotif', { d: true, mess: error })
        return Promise.reject(error)
    } else {
        if (error.response.status == 401) {
            accountService.logout()
            router.push('/login')
        } else {
            store.commit('displayNotif', { d: true, mess: error.message })
            return Promise.reject(error)
        }
    }
})

export default Axios
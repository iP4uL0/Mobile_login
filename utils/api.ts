import axios from "axios"

export const apiConfig = axios.create({
    baseURL: "http://192.168.1.15:3000",
    timeout: 5000,
    headers: {'Content-Type': 'appication/json'}
        


})
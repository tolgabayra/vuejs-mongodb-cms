import axios from "axios"
export const appAxios = axios.create({
    baseURL: "http://localhost:5000"
})
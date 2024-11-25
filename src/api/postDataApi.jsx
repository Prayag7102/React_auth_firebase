import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})
export const postData = ()=>{
    return api.get(`/posts?_limit=6`)
}
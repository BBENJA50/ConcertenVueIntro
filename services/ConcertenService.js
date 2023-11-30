import axios from "axios"

const apiClient = axios.create({
    baseURL:"https://my-json-server.typicode.com/BBENJA50/fake/concerten",
    withCredentials: false,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    }
})
export default{
    getConcerten(){
        return apiClient.get("/")
    },
    getConcert(id){
        return apiClient.get("/"+id)
    }
}
import axios from "axios"

const apiClient = axios.create({
    baseURL:"https://my-json-server.typicode.com/BBENJA50/fake/foodtrucks",
    withCredentials: false,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    }
})
export default{
    getFoodtrucks(){
        return apiClient.get("/")
    },
    getFoodtruck(id){
        return apiClient.get("/"+id)
    }
}
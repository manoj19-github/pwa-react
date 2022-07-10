import axios from "axios"

export const fetchByUserId=async(id)=>{
    try{
        if(!id) return
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return data
    }catch(err){
        console.log("error occured : ",err)
    }
}    
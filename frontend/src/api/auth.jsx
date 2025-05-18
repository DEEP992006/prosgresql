import axios from "axios"
import { api } from "./config"
export const authapi = async (email,password) => {
    const res = await axios.post(`${api}/auth/login`,{
        "email":email,
        "password":password
    })
    return res.data.token  
}

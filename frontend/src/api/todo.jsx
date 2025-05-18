import axios from "axios";
import { api } from "./config";
export const todoapi = async () => {
    try {
        let token = localStorage.getItem("token")
        const res = await axios.get(`${api}/todo/${token}`)
        return res.data

    } catch (error) {
        throw new Error("you are not authourized");
    }
}
export const new_todo = async (name, description, token) => {
    try {
        const todo = await axios.post(`${api}/todo`, {
            "name": name,
            "description": description,
            "token": token
        })
        console.log(todo);
        return todo
    }
    catch (error) {
        throw new Error("something went wrong");
    }
}
export const delete_todo = async (name) => {
    try {
        const todo = await axios.delete(`${api}/todo`, {
           data:{ "name": name}
        })
        console.log(todo);

        return todo
    } catch (error) {
        throw new Error("unable to delete");
    }
}
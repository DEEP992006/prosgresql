import { useMutation } from "@tanstack/react-query"
import {authapi } from "./api/auth"
import { useState } from "react"
import { todoapi } from "./api/todo"
import { NavLink } from "react-router";
export default function login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useMutation({
        mutationFn: async (credentials) => {
            try {
                await todoapi()
            } catch (error) {
                let token = await authapi(credentials.email, credentials.password)
                localStorage.setItem("token", token)
            }
        },
        onSuccess: async () => {
            console.log("success");
        }
    })
    return <>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Fixed onChange
            placeholder="Email"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button onClick={() => auth.mutate({ email, password })}>login</button>
    {
        auth.isSuccess && <div className="bg-red-600">hi
          </div>
    }
    {auth.isError && <div>invalif user data</div>}
    </>
}
import React from 'react'
import {useMutation, useQueries, useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import {todoapi,new_todo,delete_todo } from './api/todo';
const Todo = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const { data: todos, error:usererror, isLoading:todoisloading, refetch:todoreftch } = useQuery({
    queryKey: ["todo"],
    queryFn: todoapi  })
  const newtodos = useMutation({
    mutationFn: async (credentials) => {
      const token = localStorage.getItem("token")
      const res = await new_todo(credentials.name,credentials.description,token)
      console.log(res);
    },
    onSuccess:async () => {
      todoreftch()
    }
  })
  const deletetodo = useMutation({
    mutationFn:async (name) => {
      const todo = await delete_todo(name)
      console.log(todo);  
    },
    onSuccess: async () => {
      todoreftch()
    }

  })
  return (
    <div>
      <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='name'
     /> 
     <input
     placeholder='description'
     type='text'
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     />
      <button onClick={() => newtodos.mutate({name,description})}>Show todo</button>
        <button onClick={() => todos.refetch()}>show all todo</button>
        {todos && todos.map((item, index) => (
        <div key={index}> 
          <p>{item.name}</p>
          <p>{item.description}</p>
          <button onClick={() => deletetodo.mutate(item.name)}>delete</button>
        </div>
      ))}
{
  todoisloading && (
    <div>loadinf</div>
  )
}
    </div>
  )
}

export default Todo
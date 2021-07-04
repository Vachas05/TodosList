import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div className="container mt-2">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
        </div>
    )
}

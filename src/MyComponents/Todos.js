import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {

    let myStyle = {
        
    }

    return (
        <div className="container mt-4" style={myStyle}>
            <h3 className="my-3">TodosList</h3>
            
            {props.todos.length==0 ? "no todos to display" :
            props.todos.map( (todo) => {
                return(
                    <>
                    <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                    </>
                )
            })}
        </div>
    )
}

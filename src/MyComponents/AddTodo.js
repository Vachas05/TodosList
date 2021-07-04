import React,{useState} from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");    

    const submit = (e)=>{
        e.preventDefault();
        if(title.length===0 || desc.length===0){
            alert("Title or the Descrition cannot be empty");
            return;
        }
        console.log("the button seems to work fine");
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}}id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={(e)=>{submit(e)}} className="btn btn-primary btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

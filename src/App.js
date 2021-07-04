import './App.css';
import Header from './MyComponents/Header';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
    let initTodos=[];
    if(localStorage.getItem("todos")===null){
      initTodos = [];
    }else{
      initTodos = JSON.parse(localStorage.getItem("todos"));
    } 

    const onDelete = (todo)=> {   
      console.log("i am working fine",todo);

      setTodos( todos.filter((e)=>{
        return e!==todo;
      }) 
      )
      localStorage.setItem("todos",JSON.stringify(todos));
    }

    const addTodo = (title,desc)=>{
      console.log("i am adding a todo",title, desc);
      let sno = todos.length===0 ? 0 : todos[todos.length-1].sno + 1;
      const myTodo = {
        sno : sno,
        title : title,
        desc : desc
      }
      console.log(myTodo);
      setTodos([...todos,myTodo]);
    }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]) 

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/> 
          </Route>
          <Route exact path="/about">
            <About  />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {

  const todoItems = [
    {
      name : "Buy Milk",
      dueDate : "4/10/2023"
    },
    {
      name : "Go to College",
      dueDate : "4/10/2023"
    },
    {
      name : "Like The Video",
      dueDate : "Right Now"
    }
  ]

  return (
    
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>  
        
      </center>
    
  );
}

export default App;


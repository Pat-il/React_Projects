import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { useState } from 'react';

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  }

  const handleDeletedItem = (itemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItem);
    
  }

  return (
    
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem}/>
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeletedItem}/>  
        
      </center>
    
  );
}

export default App;



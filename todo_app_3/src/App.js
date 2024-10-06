import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { useState } from 'react';

function App() {

  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added ${itemName} at ${itemDueDate}`);
    const setItems = [...initialTodoItems, 
      {
      name : itemName,
      dueDate : itemDueDate
    }];
    setTodoItems(setItems);
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


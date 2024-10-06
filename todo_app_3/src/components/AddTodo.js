import React from 'react'
import {useState} from 'react'

function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value)
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div>
      <div className="row kg-row">
            <div className="col-6">
              <input type="text" value={todoName}  onChange={handleNameChange} placeholder='Enter Todo Here'/>
            </div>
            <div className="col-4">
              <input type="date"  value={todoDate}  onChange={handleDateChange} />
            </div>
            <div className="col-2">
            <button type="button" onClick={handleAddButtonClicked} 
              className="btn btn-success kg-button">Add</button>
            </div>
          </div>
    </div>
  )
}

export default AddTodo

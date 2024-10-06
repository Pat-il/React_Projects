import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({todoItems, onDeleteClick}) {
  return (
    <div>
      <div className="items-container">
      {todoItems.map((item) => <TodoItem key={item.name} onDeleteClick={onDeleteClick}     todoName={item.name} todoDate={item.dueDate} 
      />)}
          
      </div>
    </div>
  )
}

export default TodoItems

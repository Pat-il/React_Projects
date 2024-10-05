import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({todoItems}) {
  return (
    <div>
      <div className="items-container">
      {todoItems.map((item) => <TodoItem todoName={item.name} todoDate={item.dueDate} />)}
          
        </div>
    </div>
  )
}

export default TodoItems

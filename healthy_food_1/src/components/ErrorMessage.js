import React from 'react'

function ErrorMessage({foodItems}) {
  return (
    <div>
      {foodItems.length === 0 && <h3>I am Still Hungry</h3>}
    </div>
  )
}

export default ErrorMessage

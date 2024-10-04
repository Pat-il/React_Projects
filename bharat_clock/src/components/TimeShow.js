import React from 'react'

function TimeShow() {

    const date = new Date();

  return (
    <div className='lead'>
      This is the Current Time: {date.toLocaleTimeString()} : {date.toLocaleDateString()}
    </div>
  )
}

export default TimeShow

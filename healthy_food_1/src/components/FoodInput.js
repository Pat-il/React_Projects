import React from 'react'
import styles from "./FoodInput.module.css";

function FoodInput({handleKeyDown}) {

  return (
    <div >
      <input className={styles.foodInput} type="text" placeholder='Enter food Item here'
      onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default FoodInput

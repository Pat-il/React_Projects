import React from 'react'
import styles from "./Item.module.css"

function Item({items}) {

  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${items} is Bought`);
  }

  return (
    <div>
      <li key={items} className={`list-group-item`}><span className={styles.kgSpan}>{items}</span><button className={`${styles.button} btn btn-info`}
      onClick={(event) => handleBuyButtonClicked(event)}
      >Buy</button></li>
      
    </div>
  )
}

export default Item

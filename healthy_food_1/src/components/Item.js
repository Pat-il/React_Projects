import React from 'react'
import styles from "./Item.module.css"

function Item({items}) {
  return (
    <div>
      <li key={items} className={`list-group-item ${styles["kg-item"]}`}><span className={styles["kg-span"]}>{items}</span></li>
    </div>
  )
}

export default Item

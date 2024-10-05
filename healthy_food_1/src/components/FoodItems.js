import React from 'react'
import Item from './Item';

function FoodItems({foodItems}) {
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item) => 
            (<Item key={item} items = {item}
            handleBuyButton={() => console.log(`${item} brought`)}
            />))}
      </ul>
    </div>
  )
}

export default FoodItems

import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from 'react';

function App() {
  //let foodItems = [];

  let [foodItems, setFoodItems] = useState(["Dal", "Salad", "Roti"]);

  const onKeyDown = (event) => {
    if(event.key === "Enter")
    {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
    }
  }

  return (
    <Container>
      <h1 className='heading'>Healthy Food</h1>
      <ErrorMessage foodItems = {foodItems}/>
      <FoodInput handleKeyDown={onKeyDown}/>
      <FoodItems foodItems = {foodItems}/>
    </Container>
  );
}

export default App;

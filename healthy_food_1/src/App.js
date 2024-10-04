import FoodItems from './components/FoodItems';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from './components/ErrorMessage';

function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Salad", "Roti", "Green Vegetable", "Milk", "Ghee"];

  return (
    <>
      <h1 className='heading'>Healthy Food</h1>
      <ErrorMessage foodItems = {foodItems}/>
      <FoodItems foodItems = {foodItems}/>
    </>
  );
}

export default App;

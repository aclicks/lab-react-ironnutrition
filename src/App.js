import './App.css';
import FoodList from './Components/FoodList';
import { Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm';
import list from './foods.json';
import { useState } from 'react';


function App() {
  // const [allFoods, setAllFoods] = useState(foods)
  const [foods, setFoods] = useState(list);
  
  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods}/>
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <FoodList foods={foods}/>
    </div>
  );
}

export default App;

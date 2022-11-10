import './App.css';
import FoodList from './Components/FoodList';
import { Button, Input, Divider } from 'antd';
import AddFoodForm from './Components/AddFoodForm';
import list from './foods.json';
import { useState } from 'react';
import SearchBar from './Components/SearchBar'

function App() {
  const [allFoods, setAllFoods] = useState(list);
  const [search, setSearch] = useState('');

  

  return (
    <div className="App">
      
      <SearchBar search={search} setSearch={setSearch} />
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <FoodList allFoods={allFoods} setAllFoods={setAllFoods} search={search} />
    </div>
  );
}

export default App;

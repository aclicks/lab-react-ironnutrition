import './App.css';
import FoodList from './Components/FoodList';
import { Button, Input, Divider } from 'antd';
import AddFoodForm from './Components/AddFoodForm';
import list from './foods.json';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(list);
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <Divider>Search Bar</Divider>
      <label>Search</label>
      <Input type="type" value={search} onChange={handleChange} />

      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <FoodList allFoods={allFoods} setAllFoods={setAllFoods} search={search} />
    </div>
  );
}

export default App;

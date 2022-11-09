import './App.css';
import FoodList from './Components/FoodList';
import { Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm';


function App() {
  // const [allFoods, setAllFoods] = useState(foods)

  return (
    <div className="App">
      <AddFoodForm />
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <FoodList />
    </div>
  );
}

export default App;

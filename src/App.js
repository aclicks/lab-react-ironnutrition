import './App.css';
import FoodBox from './Components/FoodBox';

function App() {
  // const [allFoods, setAllFoods] = useState(foods)

  return (
    <div className="App">
      <FoodBox
          name= 'Orange'
          calories= '85'
          image= 'https://i.imgur.com/abKGOcv.jpg'
          servings= '1'
        
      />
    </div>
  );
}

export default App;

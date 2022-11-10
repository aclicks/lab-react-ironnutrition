
import { Row, Divider } from 'antd';
import FoodBox from './FoodBox';

function FoodList({allFoods, setAllFoods, search}) {
  return (
    <div>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods
        .filter((food) => {
          return food.name.toLowerCase().includes(search.toLowerCase())
        })
        .map((food) => {
          return <FoodBox food={food} allFoods={allFoods} setAllFoods={setAllFoods} key={food.name} />;
        })}
      </Row>
    </div>
  );
}

export default FoodList;

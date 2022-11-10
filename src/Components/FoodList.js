
import { Row, Divider } from 'antd';
import FoodBox from './FoodBox';

function FoodList({foods, setFoods}) {
  return (
    <div>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodBox food={food} foods={foods} setFoods={setFoods} key={food.name} />;
        })}
      </Row>
    </div>
  );
}

export default FoodList;

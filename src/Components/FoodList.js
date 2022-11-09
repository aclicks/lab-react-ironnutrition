import list from '../foods.json';
import { useState } from 'react';
import { Row, Divider} from 'antd';
import FoodBox from './FoodBox'

function FoodList() {
  const [foods, setFoods] = useState(list);

  return (
    <div>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return (
            <FoodBox food={food} key={food.name}/>
          )
        })}
      </Row>
    </div>
  );
}

export default FoodList;

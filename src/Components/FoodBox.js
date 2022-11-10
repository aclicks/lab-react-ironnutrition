import { Button, Card, Col } from 'antd';

function FoodBox({ food, allFoods, setAllFoods}) {
   
    function handleDelete(){

        let filteredFoods = allFoods.filter((name) => {
            return food.name !== name;
        });
        console.log(filteredFoods);
        setAllFoods(filteredFoods);
    }

    return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {+food.calories * +food.servings} </b> kcal
        </p>
        <Button type="primary" danger name={food.name} onClick={() => handleDelete(food.name)}>Delete food</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

import React, { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  }

  return (
    <div>
      <Divider>Add Food Form</Divider>
      <Form
        // labelCol={{
        //   span: 4,
        // }}
        // wrapperCol={{
        //   span: 14,
        // }}
        // layout="horizontal"
      >
        <Form.Item label="Name">
          <Input type="text" value={form.name} name="name" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Image">
          <Input type="text" value={form.image} name="image" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Calories">
          <Input type="number"
            value={form.calories}
            name="calories"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Servings">
          <Input type="number"
            value={form.servings}
            name="servings"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default AddFoodForm;

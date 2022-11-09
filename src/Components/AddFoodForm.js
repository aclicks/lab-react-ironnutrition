import React, { useState } from 'react';
import { Form, Input, Button, Divider, InputNumber } from 'antd';

const AddFoodForm = () => {
  return (
    <div>
      <Divider>Add Food Form</Divider>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Image">
          <Input />
        </Form.Item>

        <Form.Item label="Calories">
          <Input />
        </Form.Item>

        <Form.Item label="Servings">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default () => <AddFoodForm />;

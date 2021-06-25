import React from 'react';
import {Form, Button} from 'react-bootstrap';
import useForm from '../../hooks/useForm';

function TodoForm (props) {

  const [handleChange, handleSubmit] = useForm(props.handleSubmit);

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleChange}
            required
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control
            type="range"
            name="difficulty" 
            min="1" 
            max="5" 
            defaultValue="1" 
            onChange={handleChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control 
            type="text" 
            name="assignee" 
            placeholder="Assigned To" 
            onChange={handleChange}
            required />
        </Form.Label>
        <Button variant="primary" type="submit">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;

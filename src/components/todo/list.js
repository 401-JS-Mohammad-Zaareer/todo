import React from 'react';
import './todo.scss';

export default function TodoList(props) {
  return (
    <>
      <ul>
        {props.list.map(item => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <span >{item.text}</span>
            <span>{item.assignee}</span>
            <span>{item.difficulty}</span>
            <span onClick={() => props.handleDelete(item._id)}>x</span>
            <span onClick={() => props.handleComplete(item._id)}>{item.complete?'complete': 'pending'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
import React, {useState, useEffect, useContext} from 'react';
import { ConfigurationsContext } from '../../context/configurations';

import './todo.scss';


export default function TodoList(props) {
  const {hideCompleted, sortedByDifficulty} = useContext(ConfigurationsContext);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    let items = [...props.list];
    if(hideCompleted) {
      items = items.filter(item=> !item.complete);
    }

    if(sortedByDifficulty) {
      items.sort((item1, item2) => {
        return item2.difficulty - item1.difficulty;
      });
    }
    
    setItems(items);
  }, [hideCompleted, sortedByDifficulty, props.list]);


  return (
    <>
      <ul>
        {items.map(item => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <div>
              <span >{item.text}</span>
              <span>{item.assignee}</span>
              <span>{item.difficulty}</span>
              <span onClick={() => props.handleDelete(item._id)}>x</span>
              <span onClick={() => props.handleComplete(item._id)}>{item.complete?'complete': 'pending'}</span>
            </div>
          </li>
        ))}
        <button>previous</button>
        <button>next</button>
      </ul>
    </>
  );
}
import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';
import './todo.scss';
import ConfigurationsForm from './configurations';

export default function ToDo() {
  const [list, setList] = useState([]);
  const [addItem, getTodoItems ,toggleComplete, deleteItem] = useAjax(list, setList);

  useEffect(()=> {
    getTodoItems();
  }, []);

  useEffect(() => {
    document.title = list.filter((item) => !item.complete).length;
  }, [list]);

  return (
    <>
      <header>
        <h2>
          To Do List Manager ({list.filter((item) => !item.complete).length})
        </h2>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>
        <div>
          <ConfigurationsForm/>
        </div>
        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </>
  );
}
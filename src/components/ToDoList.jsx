import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListInput from './ListInput';
import LoadList from './LoadList';

function ToDoList() {
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Go for a run',
      complete: true,
    },
    {
      id: 2,
      title: 'Cook Food',
      complete: false,
    },
  ]);
  return (
    <>
      <div className="list-container">
        <ListInput addTodoItem={addTodoItem} />
        <LoadList todosProps={todos} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate} />
      </div>
    </>
  );
}

export default ToDoList;

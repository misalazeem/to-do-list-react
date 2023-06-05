import React from 'react';
import ToDoItem from './ToDoItems';
import PropTypes from 'prop-types';

function LoadList({
  todosProps, setTodos, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <ToDoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate} />
      ))}
    </ul>
  );
}

LoadList.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};

export default LoadList;

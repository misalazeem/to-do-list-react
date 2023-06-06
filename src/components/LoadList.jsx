import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItems';

function LoadList({
  todosProps, setTodos, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <ToDoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

LoadList.propTypes = {
  todosProps: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default LoadList;

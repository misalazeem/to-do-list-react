import { React, useState } from 'react';
import PropTypes from 'prop-types';

function ToDoItem({
  itemProp, setTodos, delTodo, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    }));
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={itemProp.complete}
          onChange={() => handleChange(itemProp.id)}
        />
        <input
          type="text"
          value={itemProp.title}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
          className="text-input"
        />
        <button className="update-button" type="button" onClick={handleEditing}>Edit</button>
        <button className="delete-button" type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      </li>
    </>
  );
}

ToDoItem.propTypes = {
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  itemProp: PropTypes.func.isRequired,
};

export default ToDoItem;

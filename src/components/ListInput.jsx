import { React, useState } from 'react';
import PropTypes from 'prop-types';

function ListInput({ addTodoItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <>
      <div className="input-task-container">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Tasks Here" value={title} onChange={handleChange} required />
          <button className="input-task-btn" type="submit">Add</button>
          <span>{message}</span>
        </form>
      </div>
    </>
  );
}

ListInput.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default ListInput;

import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  // State to manage the input value. If editing, initialize with the existing value.
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // Ref to focus the input field
  const inputRef = useRef(null);

  // Effect to focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  });

  // Function to handle input changes
  const handleChange = e => {
    setInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Call the onSubmit function passed via props with the new todo item
    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // Generate a random ID
      text: input // Use the current input value
    });
    setInput(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        // Render this block if editing an existing todo
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit' // Different class for styling edit mode
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        // Render this block if adding a new todo
        <>
          <input
            placeholder='Add....'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef} // Reference to auto-focus the input
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add task
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

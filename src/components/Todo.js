import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  // State to manage the current edit mode
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // Function to handle the submission of the updated todo
  const submitUpdate = value => {
    updateTodo(edit.id, value); // Update the todo item with the new value
    setEdit({
      id: null,
      value: '' // Reset the edit state
    });
  };

  // If the edit mode is active, show the TodoForm component with the current todo value
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Render the list of todos
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} // Apply different class based on completion status
      key={index} // Unique key for each todo item
    >
      {/* Clicking on the todo text will mark it as complete */}
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        {/* Icon to delete the todo item */}
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        {/* Icon to edit the todo item */}
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;

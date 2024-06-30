import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = todo => {
    // If the todo text is empty or only contains whitespace, do not add it
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Add the new todo to the beginning of the todos array
    const newTodos = [todo, ...todos];

    // Update the state with the new array of todos
    setTodos(newTodos);
    console.log(...todos); // Log the todos to the console
  };

  // Function to update an existing todo
  const updateTodo = (todoId, newValue) => {
    // If the new value text is empty or only contains whitespace, do not update
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // Map through the todos and replace the one with the matching id with the new value
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  // Function to remove a todo by id
  const removeTodo = id => {
    // Filter out the todo with the matching id
    const removedArr = [...todos].filter(todo => todo.id !== id);

    // Update the state with the filtered array
    setTodos(removedArr);
  };

  // Function to mark a todo as complete by toggling its isComplete property
  const completeTodo = id => {
    // Map through the todos and toggle the isComplete property of the matching todo
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // Update the state with the modified array
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Welcome to TaskMaster!</h1> {/* Title for the TodoList */}
      <TodoForm onSubmit={addTodo} /> {/* Component to add a new todo */}
      <Todo
        todos={todos} 
        completeTodo={completeTodo}
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;

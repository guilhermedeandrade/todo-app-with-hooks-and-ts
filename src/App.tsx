import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'learn typescript',
    'use typescript with react'
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(newTodo === '');
  });

  function handleSubmit(event: any): void {
    setTodos(todos.concat([newTodo]));
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>todo app using hooks</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="write a new todo"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={isButtonDisabled ? 'disabled-button' : 'enabled-button'}
        >
          add
        </button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useRef, useState, useEffect, MutableRefObject, FormEvent } from 'react';
import './App.css';

function App() {
  const inputElement: MutableRefObject<HTMLInputElement> = useRef(document.createElement("input"));

  const [todos, setTodos] = useState([
    'learn typescript',
    'use typescript with react'
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(newTodo === '');
    inputElement.current.focus()
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    setTodos(todos.concat([newTodo]));
    setNewTodo('')
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>todo app using hooks</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          ref={inputElement}
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

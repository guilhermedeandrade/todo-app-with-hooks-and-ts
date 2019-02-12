import React, {
  useRef,
  useState,
  useEffect,
  MutableRefObject,
  FormEvent
} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

const App: React.FunctionComponent = () => {
  const inputElement: MutableRefObject<HTMLInputElement> = useRef(
    document.createElement("input")
  );

  const [todos, setTodos] = useState([
    "learn typescript",
    "use typescript with react"
  ]);

  const [newTodo, setNewTodo] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(newTodo === "");
    inputElement.current.focus();
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    setTodos(todos.concat([newTodo]));
    setNewTodo("");
    event.preventDefault();
  }

  return (
    <div className="App">
      <Header title="todo" features={["typescript", "hooks"]} />
      <Form
        handleSubmit={handleSubmit}
        inputElement={inputElement}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        isButtonDisabled={isButtonDisabled}
      />
      <List todos={todos} />
    </div>
  );
};

export default App;

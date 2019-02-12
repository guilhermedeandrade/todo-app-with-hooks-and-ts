import React from "react";

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputElement: React.MutableRefObject<HTMLInputElement>;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  isButtonDisabled: boolean;
};

const Form: React.SFC<Props> = ({
  handleSubmit,
  inputElement,
  newTodo,
  setNewTodo,
  isButtonDisabled
}) => {
  return (
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
        className={isButtonDisabled ? "disabled-button" : "enabled-button"}
      >
        add
      </button>
    </form>
  );
};

export default Form;

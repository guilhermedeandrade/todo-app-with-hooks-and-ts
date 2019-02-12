import React from "react";

type Props = {
  todos: string[];
};

const List: React.SFC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};

export default List;

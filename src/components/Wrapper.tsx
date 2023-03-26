import { useState, useEffect, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Input, List } from "@chakra-ui/react";
import TextInput from "./Input";
import BothButtons from "./Button";
import ListItems from "./List";
import { Todo } from "../types";

function Wrapper() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = { text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const handleRemoveTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <Outline>
        <TextInput handleChange={handleChange} value={inputValue} />
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <BothButtons handleClick={handleAddTodo} buttonText="Add Todo" />
          <BothButtons
            handleClick={handleRemoveTodos}
            buttonText="Delete All"
          />
        </div>
        <ListItems todos={todos} />
      </Outline>
    </div>
  );
}

const Outline = styled.div`
  max-width: 500px;
  margin: 5rem auto;
  border-radius: 0.5rem;
  border: 2px solid teal;
  padding: 2rem;
`;

export default Wrapper;

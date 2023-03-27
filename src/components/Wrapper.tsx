import { useState, ChangeEvent, MouseEvent } from "react";
import styled from "@emotion/styled";
import TextInput from "./Input";
import BothButtons from "./Button";
import ListItems from "./List";
import { Todo } from "../types";
import { Heading } from "@chakra-ui/react";

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
  const handleDoubleClick = (event: MouseEvent<HTMLLIElement>) => {
    console.log("clicked");
  };

  return (
    <div>
      <Outline>
        <Heading sx={{ margin: "1rem", textAlign: "center", color: "teal" }}>
          Todos
        </Heading>
        <InputBar>
          <TextInput handleChange={handleChange} value={inputValue} />
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <BothButtons
              handleClick={handleRemoveTodos}
              buttonText="Delete List"
            />
            <BothButtons handleClick={handleAddTodo} buttonText="Add Todo" />
          </div>
        </InputBar>
        <div>
          <ListItems todos={todos} handleOnDoubleClick={handleDoubleClick} />
        </div>
      </Outline>
    </div>
  );
}

const Outline = styled.div`
  width: 500px;
  margin: 5rem auto;
  border-radius: 0.5rem;
  border: 2px solid teal;
  padding: 2rem;
`;
const InputBar = styled.div`
  border-radius: 0.5rem;
  border: 0.5px solid teal;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default Wrapper;

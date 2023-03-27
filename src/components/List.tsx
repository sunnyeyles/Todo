// import {HTMLLIElement} from "react"
import { MouseEvent } from "react";
import { ListItem, UnorderedList, List, ListIcon } from "@chakra-ui/react";
import { CheckIcon, MinusIcon } from "@chakra-ui/icons";
import { Todo } from "../types";
interface Todos {
  todos: Todo[];
  handleOnDoubleClick: (event: MouseEvent<HTMLLIElement>) => void;
}

function ListItems({ todos, handleOnDoubleClick }: Todos) {
  return (
    <UnorderedList>
      {todos.map((todo, index) => (
        <ListItem
          onDoubleClick={handleOnDoubleClick}
          key={index}
          sx={{ cursor: "pointer", margin: "1rem" }}
        >
          {todo.text}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
export default ListItems;

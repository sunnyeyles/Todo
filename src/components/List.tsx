import { MouseEvent } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
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

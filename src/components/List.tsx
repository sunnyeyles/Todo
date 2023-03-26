import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Todo } from "../types";
interface Todos {
  todos: Todo[];
}

function ListItems({ todos }: Todos) {
  return (
    <UnorderedList>
      {todos.map((todo, index) => (
        <ListItem key={index}>{todo.text}</ListItem>
      ))}
    </UnorderedList>
  );
}
export default ListItems;

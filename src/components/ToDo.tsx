import { ButtonProps } from "@chakra-ui/react";

interface ToDoText {
  text: string;
}
function ToDo({ text }: ToDoText) {
  return <div>{text}</div>;
}
export default ToDo;

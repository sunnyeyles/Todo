import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface TextInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function TextInput({ handleChange, value }: TextInputProps): JSX.Element {
  return (
    <div>
      <Input placeholder="Enter Todo" onChange={handleChange} value={value} />
    </div>
  );
}

export default TextInput;

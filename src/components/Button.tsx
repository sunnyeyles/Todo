import { Button } from "@chakra-ui/react";
interface buttonProps {
  buttonText: string;
  handleClick: () => void;
}
function BothButtons({ buttonText, handleClick }: buttonProps) {
  return (
    <div>
      <Button onClick={handleClick} colorScheme="teal">
        {buttonText}
      </Button>
    </div>
  );
}
export default BothButtons;

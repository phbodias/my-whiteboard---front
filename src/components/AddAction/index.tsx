import Button from "./style";
import { IoAddOutline } from "react-icons/io5";

interface Props {
  action: string;
}

const AddAction = ({ action }: Props) => {
  return (
    <Button>
      <IoAddOutline />
      {action}
    </Button>
  );
};

export default AddAction;

import Button from "./style";

interface Props {
  action: string;
}

const AddAction = ({ action }: Props) => {
  return <Button>{action}</Button>;
};

export default AddAction;

import { SetStateAction } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Content } from "./style";
import TextareaAutosize from "react-textarea-autosize";
import AddAction from "../../AddAction";

interface Props {
  isOpen: boolean;
  onRequestClose: React.Dispatch<SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ReminderModal = ({ isOpen, onRequestClose }: Props) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let day = today.getDay().toString();
  if (Number(day) < 10) day = `0${day}`;
  const month = today.getMonth();
  const year = today.getFullYear();
  const actualDate = `${year}-${month}-${day}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      style={customStyles}
    >
      <Content>
        <div className="top">
          <p>Adicionar lembrete</p>
          <AiOutlineCloseCircle onClick={() => onRequestClose(false)} />
        </div>
        <div className="date">
          <p>Data:</p>
          <input type="date" min={actualDate} />
        </div>
        <div className="description">
          <p>Descrição:</p>
          <TextareaAutosize minRows={1} maxRows={12} className="textarea" />
        </div>
        <div className="add">
          <AddAction action="Adicionar" />
        </div>
      </Content>
    </Modal>
  );
};

export default ReminderModal;

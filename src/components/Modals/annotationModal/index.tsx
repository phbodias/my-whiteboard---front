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

const AnnotationModal = ({ isOpen, onRequestClose }: Props) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      style={customStyles}
    >
      <Content>
        <div className="top">
          <p>Adicionar anotação</p>
          <AiOutlineCloseCircle onClick={() => onRequestClose(false)} />
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

export default AnnotationModal;

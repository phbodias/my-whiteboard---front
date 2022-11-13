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

const PurchaseModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      style={customStyles}
    >
      <Content>
        <div className="top">
          <p>Adicionar item à comprar</p>
          <AiOutlineCloseCircle onClick={() => onRequestClose(false)} />
        </div>
        <div>
          <div className="item">
            <p>Item:</p>
            <TextareaAutosize minRows={1} maxRows={2} className="textarea" />
          </div>
          <div className="amount">
            <p>Quantidade:</p>
            <TextareaAutosize minRows={1} maxRows={1} className="textarea" />
          </div>
        </div>
        <div className="add">
          <AddAction action="Adicionar" />
        </div>
      </Content>
    </Modal>
  );
};

export default PurchaseModal;

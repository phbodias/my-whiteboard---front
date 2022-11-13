import { useState } from "react";
import AddAction from "../../components/AddAction";
import AddModal from "../../components/Modals/addModal";
import Content from "./style";

const PurchasePage = () => {
  const [addPurchaseModel, setAddPurchaseModel] = useState(false);

  function openModal() {
    setAddPurchaseModel(true);
  }

  return (
    <Content>
      <div onClick={openModal}>
        <AddAction action={"Para comprar"} />
      </div>
      <AddModal
        toAdd="item à comprar"
        isOpen={addPurchaseModel}
        onRequestClose={() => setAddPurchaseModel(false)}
      />
    </Content>
  );
};

export default PurchasePage;

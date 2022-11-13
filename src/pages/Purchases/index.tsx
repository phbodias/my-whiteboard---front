import { useState } from "react";
import AddAction from "../../components/AddAction";
import PurchaseModal from "../../components/Modals/purchaseModal";
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
      <PurchaseModal
        isOpen={addPurchaseModel}
        onRequestClose={() => setAddPurchaseModel(false)}
      />
    </Content>
  );
};

export default PurchasePage;

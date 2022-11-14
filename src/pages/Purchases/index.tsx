import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import AddAction from "../../components/AddAction";
import PurchaseModal from "../../components/Modals/purchaseModal";
import PageTitle from "../../styles/PageTitles/style";
import Content from "./style";

const PurchasePage = () => {
  const [addPurchaseModel, setAddPurchaseModel] = useState(false);

  function openModal() {
    setAddPurchaseModel(true);
  }

  return (
    <Content>
      <PageTitle>
        <div className="title">
          <HiOutlineShoppingBag className="icons" />
          <p>Para comprar</p>
        </div>
      </PageTitle>
      <div onClick={openModal}>
        <AddAction action={"Adicionar"} />
      </div>
      <PurchaseModal
        isOpen={addPurchaseModel}
        onRequestClose={() => setAddPurchaseModel(false)}
      />
    </Content>
  );
};

export default PurchasePage;

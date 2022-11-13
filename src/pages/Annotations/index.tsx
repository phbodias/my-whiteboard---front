import { useState } from "react";
import AddAction from "../../components/AddAction";
import AnnotationModal from "../../components/Modals/annotationModal";
import Content from "./style";

const AnnotationsPage = () => {
  const [addAnnotationModel, setAddAnnotationModel] = useState(false);

  function openModal() {
    setAddAnnotationModel(true);
  }

  return (
    <Content>
      <div onClick={openModal}>
        <AddAction action={"Adicionar anotação"} />
      </div>
      <AnnotationModal
        isOpen={addAnnotationModel}
        onRequestClose={() => setAddAnnotationModel(false)}
      />
    </Content>
  );
};

export default AnnotationsPage;

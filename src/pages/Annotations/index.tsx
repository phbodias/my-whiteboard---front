import { useState } from "react";
import { HiOutlineAnnotation } from "react-icons/hi";
import AddAction from "../../components/AddAction";
import AnnotationModal from "../../components/Modals/annotationModal";
import PageTitle from "../../styles/PageTitles/style";
import Content from "./style";

const AnnotationsPage = () => {
  const [addAnnotationModel, setAddAnnotationModel] = useState(false);

  function openModal() {
    setAddAnnotationModel(true);
  }

  return (
    <Content>
      <PageTitle>
        <div className="title">
          <HiOutlineAnnotation className="icons" />
          <p>Anotações</p>
        </div>
      </PageTitle>
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

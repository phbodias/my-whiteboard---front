import { useState } from "react";
import { FaBrain } from "react-icons/fa";
import AddAction from "../../components/AddAction";
import ReminderModal from "../../components/Modals/reminderModal";
import PageTitle from "../../styles/PageTitles/style";
import Content from "./style";

const ReminderPage = () => {
  const [addReminderModel, setAddReminderModel] = useState(false);

  function openModal() {
    setAddReminderModel(true);
  }

  return (
    <Content>
      <PageTitle>
        <div className="title">
          <FaBrain className="icons" />
          <p>Lembretes</p>
        </div>
      </PageTitle>
      <div onClick={openModal}>
        <AddAction action={"Adicionar lembrete"} />
      </div>
      <ReminderModal
        isOpen={addReminderModel}
        onRequestClose={() => setAddReminderModel(false)}
      />
    </Content>
  );
};

export default ReminderPage;

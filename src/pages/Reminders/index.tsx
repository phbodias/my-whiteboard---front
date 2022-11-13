import { useState } from "react";
import AddAction from "../../components/AddAction";
import ReminderModal from "../../components/Modals/reminderModal";
import Content from "./style";

const ReminderPage = () => {
  const [addReminderModel, setAddReminderModel] = useState(false);

  function openModal() {
    setAddReminderModel(true);
  }

  return (
    <Content>
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

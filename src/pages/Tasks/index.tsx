import { useState } from "react";
import AddAction from "../../components/AddAction";
import AddModal from "../../components/Modals/addModal";
import Content from "./style";

const TasksPage = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);

  function openModal() {
    setAddTaskModal(true);
  }

  return (
    <Content>
      <div onClick={openModal}>
        <AddAction action={"Adicionar Tarefa"} />
      </div>
      <AddModal
        toAdd="Tarefa"
        isOpen={addTaskModal}
        onRequestClose={() => setAddTaskModal(false)}
      />
    </Content>
  );
};

export default TasksPage;

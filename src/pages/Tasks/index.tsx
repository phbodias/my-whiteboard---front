import { useState } from "react";
import AddAction from "../../components/AddAction";
import TasksModal from "../../components/Modals/tasksModal";
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
      <TasksModal
        isOpen={addTaskModal}
        onRequestClose={() => setAddTaskModal(false)}
      />
    </Content>
  );
};

export default TasksPage;

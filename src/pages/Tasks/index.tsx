import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import AddAction from "../../components/AddAction";
import TasksModal from "../../components/Modals/tasksModal";
import PageTitle from "../../styles/PageTitles/style";
import Content from "./style";

const TasksPage = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);

  function openModal() {
    setAddTaskModal(true);
  }

  return (
    <Content>
      <PageTitle>
        <div className="title">
          <FaTasks className="icons" />
          <p>Tarefas</p>
        </div>
      </PageTitle>
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

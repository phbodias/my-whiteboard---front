import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AnnotationsPage from "../pages/Annotations";
import SignInPage from "../pages/Auth/SignIn";
import HomePage from "../pages/Home";
import PurchasePage from "../pages/Purchases";
import ReminderPage from "../pages/Reminders";
import TasksPage from "../pages/Tasks";
import GlobalStyle from "../styles/globalStyle";
import { Pages } from "./style";

function App() {
  const [active, setActive] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Pages active={active}>
        <Sidebar active={active} setActive={setActive} />
        <Header sidebarIsActive={active} setSidebarIsActive={setActive} />
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/tasks" element={<TasksPage />}></Route>
          <Route path="/purchases" element={<PurchasePage />}></Route>
          <Route path="/reminders" element={<ReminderPage />}></Route>
          <Route path="/annotations" element={<AnnotationsPage />}></Route>
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}

export default App;

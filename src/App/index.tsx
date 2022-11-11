import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/Home";
import GlobalStyle from "../styles/globalStyle";
import { Pages } from "./style";

function App() {
  const [active, setActive] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar active={active} setActive={setActive} />
      <Pages active={active}>
        <Header sidebarIsActive={active} setSidebarIsActive={setActive} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}

export default App;

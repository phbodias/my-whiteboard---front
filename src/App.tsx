import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { HiOutlineAnnotation, HiOutlineShoppingBag } from "react-icons/hi";
import { Container } from "./style";

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ active, setActive }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <Container active={active}>
      <div className="top">
        <p>Whiteboard</p>
        <AiOutlineCloseCircle onClick={() => setActive(false)} />
      </div>
      <div className="options">
        <ul>
          <Link to="/" className="link">
            <li
              className={selected === 1 ? "selected" : ""}
              onClick={() => setSelected(1)}
            >
              <FaTasks className="icons" />
              <p>Tarefas</p>
            </li>
          </Link>

          <Link to="/" className="link">
            <li
              className={selected === 2 ? "selected" : ""}
              onClick={() => setSelected(2)}
            >
              <HiOutlineShoppingBag className="icons" />
              <p>Comprar</p>
            </li>
          </Link>

          <Link to="/" className="link">
            <li
              className={selected === 3 ? "selected" : ""}
              onClick={() => setSelected(3)}
            >
              <FaBrain className="icons" />
              <p>Lembretes</p>
            </li>
          </Link>

          <Link to="/" className="link">
            <li
              className={selected === 4 ? "selected" : ""}
              onClick={() => setSelected(4)}
            >
              <HiOutlineAnnotation className="icons" />
              <p>Anotações</p>
            </li>
          </Link>
        </ul>

        <Link to="/" onClick={() => setSelected(0)}>
          <button className="backToHome">Voltar para home</button>
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;

import Content from "./style";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { SetStateAction, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useNavigate } from "react-router-dom";

interface Props {
  sidebarIsActive: boolean;
  setSidebarIsActive: React.Dispatch<SetStateAction<boolean>>;
}

const Header = ({ sidebarIsActive, setSidebarIsActive }: Props) => {
  const navigate = useNavigate();
  const [showConfigs, setShowConfigs] = useState(false);

  function logout() {
    navigate("/");
  }

  return (
    <Content sidebarIsActive={sidebarIsActive} showConfigs={showConfigs}>
      <CgMenuGridO
        onClick={() => setSidebarIsActive(true)}
        className="showSidebar"
      />
      <ClickAwayListener onClickAway={() => setShowConfigs(false)}>
        <div>
          <IoMdSettings onClick={() => setShowConfigs(!showConfigs)} />
          <div className="configs">
            <p>Configurações</p>
            <p onClick={logout}>Sair</p>
          </div>
        </div>
      </ClickAwayListener>
    </Content>
  );
};

export default Header;

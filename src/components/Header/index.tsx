import Content from "./style";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { SetStateAction } from "react";

interface Props {
  sidebarIsActive: boolean;
  setSidebarIsActive: React.Dispatch<SetStateAction<boolean>>;
}

const Header = ({ sidebarIsActive, setSidebarIsActive }: Props) => {
  return (
    <Content sidebarIsActive={sidebarIsActive}>
      <CgMenuGridO
        onClick={() => setSidebarIsActive(true)}
        className="showSidebar"
      />
      <IoMdSettings />
    </Content>
  );
};

export default Header;

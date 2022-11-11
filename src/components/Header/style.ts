import styled from "styled-components";

interface Props {
  sidebarIsActive: boolean;
}

const Content = styled.div<Props>`
  width: ${(props) =>
    props.sidebarIsActive ? "calc(100vw - 235px)" : "100vw"};
  height: 60px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  color: #837f7b;
  transition-timing-function: linear;
  transition-duration: 0.5s;

  .showSidebar {
    width: ${(props) => (props.sidebarIsActive ? "0" : "30px")};
  }
`;

export default Content;

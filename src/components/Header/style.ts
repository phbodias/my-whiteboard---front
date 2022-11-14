import styled from "styled-components";

interface Props {
  sidebarIsActive: boolean;
  showConfigs: boolean;
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

  .configs {
    position: absolute;
    right: ${(props) => (props.showConfigs ? "10px" : "0")};
    top: 50px;
    width: ${(props) => (props.showConfigs ? "fit-content" : "0")};
    height: ${(props) => (props.showConfigs ? "fit-conten" : "0")};
    padding: ${(props) => (props.showConfigs ? "5px" : "0")};
    font-size: ${(props) => (props.showConfigs ? "15px" : "0")};
    background-color: #615f5c;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 10px 0;
      text-decoration: underline;
      cursor: pointer;

      :hover {
        color: #59c3e0;
      }
    }

    .logout {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 600px){
    width: 100vw;
  }
`;

export default Content;

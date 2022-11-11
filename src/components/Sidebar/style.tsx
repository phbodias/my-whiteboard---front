import styled from "styled-components";

interface Props {
  active: boolean;
}

const Container = styled.div<Props>`
  width: ${(props) => (props.active ? "235px" : "0")};
  z-index: 1;
  position: fixed;
  left: 0;
  height: 100vh;
  border-right: solid 1px #dddddd;
  color: #837f7b;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
  transition-timing-function: linear;
  transition-duration: 0.5s;

  .link {
    text-decoration: none;
  }

  .top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${(props) => (props.active ? "90%" : "0")};
    font-size: ${(props) => (props.active ? "22px" : "0")};
    height: 60px;
    min-height: 50px;
    border-bottom: solid 1px #dddddd;
    margin-bottom: 20px;
  }

  .options {
    width: 100%;
    ul {
      margin-bottom: 20px;
      li {
        font-size: ${(props) => (props.active ? "20px" : "0")};
        height: 30px;
        display: flex;
        align-items: center;
        margin: 10px 0;
        padding: 3px 0;
        cursor: pointer;
        color: #837f7b;
        p {
          margin-left: 7px;
        }
        .icons {
          font-size: 25px;
          margin-left: 15px;
          color: #837f7b;
        }
        :hover {
          text-decoration: underline #615f5c;
          transition: none;
        }
      }

      .selected {
        border-top: 1px solid #615f5c;
        border-bottom: 1px solid #615f5c;
        background-color: #615f5c;
        color: #ffffff;
        transition-timing-function: linear;
        transition-duration: 0.5s;

        .icons {
          color: #ffffff;
          transition-timing-function: linear;
          transition-duration: 0.5s;
        }
      }
    }
  }
  .backToHome {
    width: 100%;
    min-width: 200px;
    height: 30px;
    margin-top: 20px;
    background: none;
    cursor: pointer;
    color: #c5c0c6;
    border: none;
    font-size: ${(props) => (props.active ? "14px" : "0")};
    text-decoration: underline;
    :hover {
      color: #59c3e0;
    }
  }
`;

export { Container };

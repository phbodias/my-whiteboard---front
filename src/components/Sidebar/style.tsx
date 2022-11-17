import styled from "styled-components";

interface Props {
  active: boolean;
}

const Container = styled.div<Props>`
  position: fixed;
  left: 0;
  height: 100vh;
  color: #837f7b;
  box-sizing: border-box;
  overflow-x: hidden;
  transition-timing-function: linear;
  transition-duration: 0.5s;

  .sidebar {
    width: ${(props) => (props.active ? "235px" : "0")};
    background-color: #f4f3ef;
    border-right: solid 1px #dddddd;
    transition-timing-function: linear;
    transition-duration: 0.5s;
  }

  .link {
    text-decoration: none;
  }

  .top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${(props) => (props.active ? "100%" : "0")};
    font-size: ${(props) => (props.active ? "22px" : "0")};
    height: 60px;
    min-height: 50px;
    border-bottom: solid 1px #dddddd;
    margin-bottom: 20px;
    box-sizing: border-box;
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

        .icons {
          color: #ffffff;
          transition-timing-function: linear;
          transition-duration: 0.5s;
        }
      }
    }
  }

  .backToHome {
    width: 235px;
    height: 30px;
    position: absolute;
    bottom: 30px;
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

  @media (max-width: 600px) {
    width: ${(props) => (props.active ? "100vw" : "0")};
    display: flex;

    .mask {
      width: ${(props) => (props.active ? "calc(100vw - 235px)" : "0")};
      height: 100vh;
      position: absolute;
      right: 0;
    }
  }

  @media (min-width: 601px) {
    .mask {
      display: none;
    }
  }
`;

export { Container };

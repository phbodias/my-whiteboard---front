import styled from "styled-components";
import background from "../../images/authBackground/background.png";

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f3ef;
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 15% 30%;
  background-size: 40vw;
  padding-right: 10%;
  box-sizing: border-box;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    width: 40vw;
    min-width: 300px;
    max-width: 350px;
    height: fit-content;
    min-height: 400px;
    border-radius: 15px;
    position: relative;
    right: -60%;

    .auth {
      background: rgb(53, 142, 237);
      background: linear-gradient(
        180deg,
        rgba(53, 142, 237, 1) 0%,
        rgba(49, 89, 130, 1) 100%,
        rgba(0, 212, 255, 1) 100%
      );
      width: 85%;
      height: 150px;
      border-radius: 12px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;

      p {
        font-size: 25px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-weight: 600;
      }

      svg {
        font-size: 22px;
      }

      .oauth {
        width: 70px;
        display: flex;
        justify-content: space-evenly;
      }
    }

    form {
      width: 85%;
      font-size: 30px;
      border-radius: 12px;
      margin-top: 50px;

      input {
        margin-bottom: 10px;
        width: 100%;
        height: 40px;
        padding: 7px;
        box-sizing: border-box;
      }

      .passwordInput {
        padding-right: 30px;
      }

      button {
        width: 100%;
        height: 40px;
        background: rgb(53, 142, 237);
        background: linear-gradient(
          180deg,
          rgba(53, 142, 237, 1) 0%,
          rgba(59, 115, 173, 1) 100%,
          rgba(0, 212, 255, 1) 100%
        );
        border-radius: 7px;
        border: none;
        color: #ffffff;
        font-size: 17px;
        margin-top: 10px;
        cursor: pointer;
      }
    }

    .redirect {
      display: flex;
      margin-top: 50px;
      margin-bottom: 15px;
      color: lightgrey;

      p:nth-child(2) {
        color: #358fed;
        margin-left: 2px;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .label-float {
      position: relative;
      padding-top: 8px;
    }

    .label-float input {
      border: 1px solid lightgrey;
      border-radius: 5px;
      outline: none;
      transition: all 0.1s linear;
      -webkit-transition: all 0.1s linear;
      -moz-transition: all 0.1s linear;
      -webkit-appearance: none;
    }

    .label-float input:focus {
      border: 2px solid #3951b2;
    }

    .label-float input::placeholder {
      color: transparent;
    }

    .label-float label {
      pointer-events: none;
      position: absolute;
      top: calc(50% - 8px);
      left: 7px;
      transition: all 0.1s linear;
      -webkit-transition: all 0.1s linear;
      -moz-transition: all 0.1s linear;
      background-color: white;
      box-sizing: border-box;
      font-size: 12px;
    }

    .label-float input:focus:required:invalid + label {
      color: red;
    }

    .label-float input:focus:required:invalid {
      border: 2px solid red;
    }

    .label-float input:focus + label,
    .label-float input:not(:placeholder-shown) + label {
      font-size: 13px;
      top: 0;
      color: #3951b2;
    }

    .label-float input:invalid:not(:placeholder-shown) + label {
      color: red;
    }

    .password {
      position: absolute;
      left: 90%;
      margin-top: 12px;
      margin-left: 3px;
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
    background-position: center 30px;
    background-size: 300px;
    padding: 0;

    .container {
      position: relative;
      top: 90px;
      left: auto;
      right: auto;
      margin-bottom: 80px;
    }
  }
`;

export { Content };

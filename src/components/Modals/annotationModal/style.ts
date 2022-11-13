import styled from "styled-components";

const Content = styled.div`
  width: 300px;
  padding: 10px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 15px;

    p {
      color: green;
    }
  }

  .description {
    display: flex;

    .textarea {
      margin-top: -1px;
      margin-left: 3px;
      resize: none;
      width: 200px;
      padding-right: 5px;
      box-sizing: border-box;
    }
  }

  .add {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

export { Content };

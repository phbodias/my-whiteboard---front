import styled from "styled-components";

const Content = styled.div`
  width: 300px;
  padding: 10px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;

    p {
      color: green;
    }
  }

  .date {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    input {
      margin-left: 5px;
    }
  }

  .item,
  .amount {
    display: flex;
    margin-top: 3px;
  }

  .textarea {
    margin-top: -1px;
    margin-left: 3px;
    resize: none;
    width: 150px;
    padding-right: 5px;
    box-sizing: border-box;
  }

  .add {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

export { Content };

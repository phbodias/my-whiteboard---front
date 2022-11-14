import styled from "styled-components";

const PageTitle = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #837f7b;
  transition-timing-function: linear;
  transition-duration: 0.5s;
  overflow-x: hidden;
  margin-bottom: 20px;
  overflow: hidden;
  
  .title {
    display: flex;
    p {
      margin-left: 5px;
      font-size: 40px;
    }

    svg {
      font-size: 40px;

      :hover {
        color: #837f7b;
        cursor: zoom-in;
      }
    }
  }
`;

export default PageTitle;

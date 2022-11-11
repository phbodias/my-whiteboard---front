import styled from "styled-components";

interface Props {
  active: boolean;
}

const Pages = styled.div<Props>`
  margin-left: ${(props) => (props.active ? "235px" : "0")};
  transition-timing-function: linear;
  transition-duration: 0.5s;
`;

export { Pages };

import styled from 'styled-components';

interface cardProps {
  borderColor: string;
  bgColor: string;
}

export const Box = styled.article<cardProps>`
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 8px;

  align-items: center;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 40vw;
`;
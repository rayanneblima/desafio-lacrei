import styled from 'styled-components';

interface loaderProps {
  color: string;
}

export const LoaderBox = styled.span<loaderProps>`
  animation: pulseanim 3s 0.5s linear infinite;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  opacity: 0.5;
  outline: 1px solid transparent;
  width: 20px;

  @keyframes pulseanim {
    0%, 50%, 100% {
      transform: scale(0.7);
    }
    25% {
      transform: scale(0.5);
    }
    75% {
      transform: scale(1);
    }
  }
`;
import styled from 'styled-components';

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 20px 0;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0 24px;
  }
`;

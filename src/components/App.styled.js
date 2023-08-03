import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 480px;
  padding: 20px;
  background-color: ${props => props.theme.colors.$secondaryBgColor};
  border-radius: ${props => props.theme.$borderRadius};
  box-shadow: ${props => props.theme.$boxShadow};

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledSmollTitle = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.$primiryTextColor};
  font-size: 20px;
  text-align: center;
`;

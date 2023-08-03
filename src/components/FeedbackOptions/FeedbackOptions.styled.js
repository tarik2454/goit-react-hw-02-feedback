import { styled } from 'styled-components';

export const StyledFeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  display: block;
  min-width: 70px;
  padding: 5px;
  font-size: 15px;
  border-radius: 4px;
  color: ${props => props.theme.colors.$white};
  background-color: ${props => props.theme.colors.$accentColor};
`;

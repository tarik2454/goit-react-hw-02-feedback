import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { StyledSection } from 'style/GlobalStyle';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledSmollTitle>{title}</StyledSmollTitle>
      {children}
    </StyledSection>
  );
};

const StyledSmollTitle = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.$primiryTextColor};
  font-size: 20px;
  text-align: center;
`;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

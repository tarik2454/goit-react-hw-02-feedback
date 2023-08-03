import { styled } from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsItem = styled.div`
  color: ${props => props.theme.colors.$secondaryTextColor};
`;

import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 2px;
  width: 350px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  justify-items: stretch;
  align-items: stretch;
  padding: 0;
  margin: 0;
  text-transform: initial;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #ccc;
    right: 0;
  }
`;

export const Title = styled.h2`
  padding: 30px;
`;

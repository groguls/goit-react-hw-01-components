import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #e9e9e9;
  border-radius: 4px;
  padding: 2px;
  width: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  color: #888;
  margin: 0;
`;

export const Location = styled.p`
  color: #888;
  margin: 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Label = styled.span`
  color: #888;
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

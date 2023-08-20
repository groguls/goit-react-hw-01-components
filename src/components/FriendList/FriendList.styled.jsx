import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: Arial, sans-serif;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  border-radius: 2px;
  width: 200px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: large;
`;

export const StatusSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 750px;
  text-align: center;
  //   border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  text-transform: uppercase;
  background-color: aqua;
`;

export const TableHeaderCell = styled.th`
  padding: 10px 20px;
  font-weight: bold;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f6f8;
  }
`;

export const TableCell = styled.td`
  padding: 10px 20px;
`;

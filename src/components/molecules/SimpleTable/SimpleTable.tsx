import React, { ReactNode } from 'react';
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tfoot,
  Tbody,
  Table,
} from '@chakra-ui/react';
import { ISimpleTable } from '@interfaces';

const SimpleTable: React.FC<ISimpleTable> = ({ headers, children }) => {
  const headersInTags = (): ReactNode => {
    return (
      <>
        {headers.map((header, index) => (
          <Th key={index}>{header}</Th>
        ))}
      </>
    );
  };

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>{headersInTags()}</Tr>
        </Thead>
        <Tbody>{children}</Tbody>
        <Tfoot>
          <Tr>{headersInTags()}</Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;

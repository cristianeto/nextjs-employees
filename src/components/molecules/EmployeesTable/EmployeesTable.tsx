import * as React from 'react';
import { TableContainer, Table, Thead, Tr, Th, Tfoot } from '@chakra-ui/react';
import { IEmployeesTable } from '@interfaces';
import { EmployeesList } from '@molecules';

const EmployeesTable: React.FC<IEmployeesTable> = ({
  employees,
  onDelete,
  onUpdate,
}) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>#</Th>
            <Th>Name</Th>
            <Th>Lastname</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <EmployeesList
          employees={employees}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />

        <Tfoot>
          <Tr>
            <Th isNumeric>#</Th>
            <Th>Name</Th>
            <Th>Lastname</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;

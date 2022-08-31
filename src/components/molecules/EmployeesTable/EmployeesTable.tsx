import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IEmployeesTable } from '@interfaces';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 90,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params: GridValueGetterParams) => (
      <div onClick={() => console.log('click icon', params.row.id)}>
        <EditIcon color="primary" />
        <DeleteIcon color="primary" />
      </div>
    ),
  },
];
const EmployeesTable: React.FC<IEmployeesTable> = ({ employees: rows }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default EmployeesTable;
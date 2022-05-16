import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: "device_name", headerName: "Name" },
	{ field: "device_type", headerName: "Devices Type" },
  { field: "device_status", headerName: "Status" },
  { field: "device_specification", headerName: "Specification" },
	{ field: "createdAt", headerName: "Created At", }
];




export default function DataTable() {
  const [data, setData] = useState({})
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}










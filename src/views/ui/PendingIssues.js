import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Assign from "./AssignUser";
import AdminComment from "./AdminComment";


const columns = [
  { field: "description", headerName: "Description",width:300},
  { field: "issuer", headerName: "Issuer", width: 130 },
  { field: "createdAt", headerName: "Created At", width: 200 },
  { field: "type", headerName: "Issue Type", width: 200 },
  { field: "assignedBy", headerName: "Assign By", width: 200 },
  { field: "assignedAt", headerName: "Assigned At", width: 200 },
  { field: "taskDescription", headerName: "Task Description", width: 300 },
  { field: "assignedTo", headerName: "Assigned To", width: 200 },
  { field: "adminComment", headerName: "Admin Remarks", width: 200 },
  { field: "status", headerName: "Status", width: 160 },

   {
      headerName: "Action",
      sortable: false,
      width: 300,
      renderCell: () => (
        <>
        <span style={{ display: "flex" }}>
          <div>
            <Assign/>
          </div>
          <div>
          <AdminComment/>
          </div>
          <i class="bi bi-trash-fill"></i>
        </span>
        </>
      )
    },
 
  
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  

  // {
  //   field: "action",
  //   headerName: "Action",
  //   sortable: false,
  //   width: 160,
  //   renderCell: () => (
  //     <span style={{ display: "flex" }}>
  //       <Button variant="contained" color="secondary">
  //         Del
  //       </Button>
  //     </span>
  //   )
  // },
];


export default function PendingIssues() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      let result = await fetch("http://localhost:5000/api/v1/issues", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await result.json();
      // console.log(result)
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

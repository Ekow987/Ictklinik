import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import {user as UserColumns, officer as OfficerColumns, director as DirectorColumns, manager as ManagerColumns, admin as AdminColumns,super as SuperColumns} from "./DataColumns"

const userObject = JSON.parse(localStorage.getItem("userObject"))

export default function PendingIssues() {
	const [data, setData] = useState({})
  const [columns,setColumns] = useState([])

	const getData = async () => {
	

		let url 
    switch (userObject.type) {
			case "user":
         url = `http://localhost:5000/api/v1/issues/user-issues/${userObject.staffId}`
         setColumns(UserColumns)
				break
			case "officer":
        url = `http://localhost:5000/api/v1/issues/technician-issues/${userObject.staffId}`
        setColumns(OfficerColumns)
				break
			case "director":
				url =``
				// setColumns(DirectorColumns)
				break
			case "manager":
                 url = ``
				//  setColumns(ManagerColumns)
				break
			case "admin":
				url = ``
				// setColumns(AdminColumns)
				break
			case "superuser":
				url=``
				// setColumns(SuperColumns)
				break
		}
		try {
			let result = await fetch(url, {
				headers: {
					"Content-Type": "application/json"
				}
			})

			const response = await result.json()
		   response.data?	setData(response.data):setData([])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getData()
	}, [])
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
	)
}

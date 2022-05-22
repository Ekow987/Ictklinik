import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import {
	user as UserColumns,
	officer as OfficerColumns,
	director as DirectorColumns,
	manager as ManagerColumns,
	superUser as SuperColumns
} from "./DevicesListColumns"

const userObject = JSON.parse(localStorage.getItem("userObject"))

export default function DataTable() {
	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])

	const getData = async () => {
		let url
		switch (userObject.type) {
			case "user":
				url = `http://localhost:5000/api/v1/devices-requests/user-requests/${userObject.staffId}`
				setColumns(UserColumns)
				break
			case "officer":
				url = `http://localhost:5000/api/v1/devices-requests/`
				setColumns(OfficerColumns)
				break
			case "director":
				url = `http://localhost:5000/api/v1/devices-requests/`
				setColumns(DirectorColumns)
				break
			case "manager":
				url = `http://localhost:5000/api/v1/devices-requests/`
				setColumns(ManagerColumns)
				break
			case "superuser":
				url = `http://localhost:5000/api/v1/devices-requests/`
				setColumns(SuperColumns)
				break
		}
		try {
			let result = await fetch(url, {
				headers: {
					"Content-Type": "application/json"
				}
			})

			const response = await result.json()
			response.data ? setData(response.data) : setData([])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getData()
	}, [1])

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid rows={data} columns={columns} rowsPerPageOptions={[6]} />
		</div>
	)
}

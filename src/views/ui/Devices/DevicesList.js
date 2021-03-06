import React, { useEffect, useState, useContext } from "react"
import { AppContext } from "../../../components/Context/AppContext"
import { DataGrid } from "@mui/x-data-grid"
import {
	user as UserColumns,
	officer as OfficerColumns,
	director as DirectorColumns,
	manager as ManagerColumns,
	superUser as SuperColumns
} from "./DevicesListColumns"

export default function DataTable() {
	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])
	const context = useContext(AppContext)
	const userObject = context.user
	const baseUrl = context.baseUrl

	const getData = async () => {
		let url
		switch (userObject.type) {
			case "user":
				url = `${baseUrl}/api/v1/devices-requests/user-requests/${userObject.staffId}`
				setColumns(UserColumns)
				break
			case "officer":
				url = `${baseUrl}/api/v1/devices-requests/`
				setColumns(OfficerColumns)
				break
			case "director":
				url = `${baseUrl}/api/v1/devices-requests/`
				setColumns(DirectorColumns)
				break
			case "manager":
				url = `${baseUrl}/api/v1/devices-requests/`
				setColumns(ManagerColumns)
				break
			case "superuser":
				url = `${baseUrl}/api/v1/devices-requests/`
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
			<DataGrid
				rows={data}
				columns={columns}
				checkboxSelection
				density="compact"
			/>
		</div>
	)
}

import React, { useEffect, useState, useContext } from "react"
import { AppContext } from "../../../components/Context/AppContext"
import { DataGrid } from "@mui/x-data-grid"
import {
	user as UserColumns,
	officer as OfficerColumns,
	director as DirectorColumns,
	manager as ManagerColumns,
	superUser as SuperColumns
} from "./IssuesListColumns"

export default function IssuesList() {
	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])
	const context = useContext(AppContext)
	const userObject = context.user
	const baseUrl = context.baseUrl

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
				url = `http://localhost:5000/api/v1/issues/`
				setColumns(DirectorColumns)
				break
			case "manager":
				url = `http://localhost:5000/api/v1/issues/`
				setColumns(ManagerColumns)
				break
			case "superuser":
				url = `http://localhost:5000/api/v1/issues/`
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

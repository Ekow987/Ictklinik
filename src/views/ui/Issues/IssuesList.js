import React, { useEffect, useState, useContext, useMemo } from "react"
import { AppContext } from "../../../components/Context/AppContext"
import { DataGrid } from "@mui/x-data-grid"
import { getUser } from "../../../services/Auth"
import moment from "moment"
import { Col } from "react-bootstrap"
import { Row } from "reactstrap"
import Axios from "axios"
import SelectOfficers from "../../../components/SelectOfficers"

const formatDate = (date, full = true) => {
	return moment(date).format("DD MMM, YYYY")
}
const userObject = getUser()

export default function IssuesList({ officers }) {
	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])
	const baseUrl = process.env.REACT_APP_SERVER

	/**
	 * @param {int} id
	 * @param {int} batchId
	 *
	 * calling the API to reassign issue
	 */
	const assignOfficer = async dataToUpload => {
		//console.log("dataToUpload: ", dataToUpload)
		try {
			let result = await Axios({
				method: "PUT",
				url: `${baseUrl}/api/v1/issues/assign/`,
				data: dataToUpload
			})

			if (result.data.code == 200) {
				getData()
				//e.target.reset() //Resetting the list of Sales Engineer
			} else {
				alert("Issue could not be assigned")
			}
		} catch (error) {
			console.log(error)
		}
	}

	const resolveIssue = async e => {
		e.preventDefault()
		let issueId = e.target.dataset.id
		console.log("issueId: ", issueId)

		try {
			let result = await Axios({
				method: "PUT",
				url: `${baseUrl}/api/v1/issues/change-status/`,
				data: { issueId: issueId, status: "Resolved" }
			})

			if (result.data.code == 200) {
				getData()
				//e.target.reset() //Resetting the list of Sales Engineer
			} else {
				alert("Operation unsuccessful")
			}
		} catch (error) {
			console.log(error)
		}
	}
	const superUserColumns = [
		{ field: "id", headerName: "#", width: 10 },
		{
			headerName: "Created At",
			field: "createdAt",
			width: 110,
			valueGetter: params => `${formatDate(params.row.createdAt)}`
		},

		{ field: "description", headerName: "Description", width: 250 },
		{ field: "issuer", headerName: "Issuer", width: 200 },
		{ field: "type", headerName: "Issue Type", width: 150 },
		{
			field: "assignedBy",
			headerName: "Assign By",
			valueGetter: params =>
				params.row.assignedBy == userObject.staffId
					? `You`
					: params.row.assignedByName
		},
		{ field: "assignedToName", headerName: "Assigned To" },
		{ field: "status", headerName: "Status" },
		{
			headerName: "Action",
			sortable: false,
			width: 250,
			renderCell: params => (
				<Row>
					<Col>
						<SelectOfficers
							officers={officers}
							submit={assignOfficer}
							params={params}
						/>
					</Col>
				</Row>
			)
		}
	]

	const managerColumns = [
		{ field: "description", headerName: "Description" },
		{ field: "issuer", headerName: "Issuer", width: 130 },
		{ field: "createdAt", headerName: "Created At" },
		{
			headerName: "Status",
			sortable: false,
			width: 100,
			renderCell: params => {
				switch (params.row.status.toString()) {
					case "Unresolved":
						return (
							<span className="btn btn-sm btn-danger">
								<div>Pending</div>
							</span>
						)
						break
					case "Resolved":
						return (
							<span className="btn btn-sm btn-success">
								<div> Resolved</div>
							</span>
						)
						break
				}
			}
		},
		{
			headerName: "Action",
			sortable: false,
			width: 300,
			renderCell: () => (
				<>
					<span style={{ display: "flex" }}>
						<div></div>
						<div></div>
						<i class="bi bi-trash-fill"></i>
					</span>
				</>
			)
		}
	]

	const directorColumns = [
		{ field: "description", headerName: "Description" },
		{ field: "issuer", headerName: "Issuer", width: 130 },
		{ field: "createdAt", headerName: "Created At" },
		{ field: "type", headerName: "Issue Type" },
		{ field: "assignedBy", headerName: "Assign By" },
		{ field: "assignedAt", headerName: "Assigned At" },
		{ field: "taskDescription", headerName: "Task Description" },
		{ field: "assignedTo", headerName: "Assigned To" },
		{ field: "adminComment", headerName: "Admin Remarks" },
		{
			headerName: "Status",
			sortable: false,
			width: 100,
			renderCell: params => {
				switch (params.row.status.toString()) {
					case "Unresolved":
						return (
							<span className="btn btn-sm btn-danger">
								<div>Pending</div>
							</span>
						)
						break
					case "Resolved":
						return (
							<span className="btn btn-sm btn-success">
								<div> Resolved</div>
							</span>
						)
						break
				}
			}
		},
		{
			headerName: "Action",
			sortable: false,
			width: 300,
			renderCell: () => (
				<>
					<span style={{ display: "flex" }}>
						<div></div>
						<div></div>
						<i class="bi bi-trash-fill"></i>
					</span>
				</>
			)
		}
	]

	const officerColumns = [
		{ field: "id", headerName: "#", width: 10 },
		{ field: "description", headerName: "Description", width: 250 },
		{ field: "issuerName", headerName: "Issuer", width: 180 },
		{
			field: "createdAt",
			headerName: "Created At",
			width: 130,
			valueGetter: params => `${formatDate(params.row.createdAt)}`
		},
		{ field: "type", headerName: "Issue Type", width: 130 },
		{
			field: "status",
			headerName: "Status",
			sortable: false,
			width: 100,
			renderCell: params => {
				switch (params.row.status.toString()) {
					case "Unresolved":
						return (
							<span className="btn btn-sm btn-danger">
								<div>Pending</div>
							</span>
						)
						break
					case "RESOLVED":
						return (
							<span className="btn btn-sm btn-success">
								<div> Resolved</div>
							</span>
						)
						break
					case "Pending":
						return (
							<span className="btn btn-sm btn-danger">
								<div> Pending</div>
							</span>
						)
						break
				}
			}
		},

		{
			headerName: "Action",
			sortable: false,
			width: 300,
			renderCell: params => {
				if (params.row.status != "RESOLVED") {
					return (
						<Row>
							<Col>
								<button
									style={{ display: "flex" }}
									className="btn btn-sm btn-primary"
									data-id={params.row.id}
									onClick={resolveIssue}
								>
									Resolve
								</button>
							</Col>
						</Row>
					)
				} else {
				}
			}
		}
	]

	const userColumns = [
		{ field: "id", headerName: "#", width: 10 },

		{ field: "description", headerName: "Description", width: 250 },
		{
			headerName: "Created At",
			field: "createdAt",
			width: 150,
			valueGetter: params => `${formatDate(params.row.createdAt)}`
		},
		{
			field: "assignedTo",
			headerName: "Assigned To",
			width: 150,
			valueGetter: params => {
				if (params.row.assignedTo === null) {
					return `Not Assigned`
				} else {
					return `${params.row.assignedToName}`
				}
			}
		},
		{ field: "type", headerName: "Issue Type", width: 150 },
		{
			headerName: "Status",
			sortable: false,
			width: 100,
			renderCell: params => {
				switch (params.row.status.toString()) {
					case "Unresolved":
						return (
							<span className="btn btn-sm btn-danger">
								<div>Pending</div>
							</span>
						)
						break
					case "Resolved":
						return (
							<span className="btn btn-sm btn-success">
								<div> Resolved</div>
							</span>
						)
						break
					case "Pending":
						return (
							<span className="btn btn-sm btn-danger">
								<div> Pending</div>
							</span>
						)
						break
				}
			}
		}
	]

	const getData = async () => {
		let url
		switch (userObject.type) {
			case "user":
				url = `http://localhost:5000/api/v1/issues/user-issues/${userObject.staffId}`
				setColumns(userColumns)
				break
			case "officer":
				url = `http://localhost:5000/api/v1/issues/technician-issues/${userObject.staffId}`
				setColumns(officerColumns)
				break
			case "director":
				url = `http://localhost:5000/api/v1/issues/`
				setColumns(directorColumns)
				break
			case "manager":
				url = `http://localhost:5000/api/v1/issues/`
				setColumns(managerColumns)
				break
			case "superuser":
				url = `http://localhost:5000/api/v1/issues/`
				setColumns(superUserColumns)
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

	useMemo(() => {
		getData()
	}, [userObject.staffId])

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid rows={data} columns={columns} density="compact" />
		</div>
	)
}

import React, { useEffect, useState, useContext } from "react"
import { AppContext } from "../../../components/Context/AppContext"
import { DataGrid } from "@mui/x-data-grid"
import { getUser } from "../../../services/Auth"
import moment from "moment"
import { Col } from "react-bootstrap"
import { Row } from "reactstrap"
import Axios from "axios"

const formatDate = (date, full = true) => {
	return moment(date).format("DD MMM, YYYY")
}
const userObject = getUser()

export default function IssuesList({ officers }) {
	const [data, setData] = useState([])
	const [assignData, setAssignData] = useState({
		userId: userObject.staffId,
		technicianId: "",
		issueId: ""
	})
	const [columns, setColumns] = useState([])
	const [officersList, setofficersList] = useState([])
	const baseUrl = process.env.REACT_APP_SERVER

	const getOfficersList = async () => {
		try {
			let result = await fetch(
				`${baseUrl}/api/v1/users/get-users-by-type/officer`,
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			let response = await result.json()
			console.log(
				"%cData: ",
				"background:purple; color:white; border-radius:20px",
				response
			)
			setofficersList(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const handleSelect = e => {
		e.preventDefault()
		const target = e.target
		const staffId = target.value
		console.log("staffId: ", staffId)
		const issueId = target.dataset.id
		console.log("issueId: ", issueId)

		setAssignData({
			...assignData,
			userId: userObject.staffId,
			technicianId: staffId,
			issueId: issueId
		})
	}

	/**
	 * @param {int} id
	 * @param {int} batchId
	 *
	 * calling the API to reassign issue
	 */
	const assignOfficer = async e => {
		e.preventDefault()
		console.log(e.target)
		let dataToUpload = assignData
		console.log("dataToUpload: ", dataToUpload)
		try {
			let result = await Axios({
				method: "PUT",
				url: `${baseUrl}/api/v1/issues/assign/`,
				data: dataToUpload
			})

			if (result.data.code == 200) {
				getData()
				setAssignData({
					...assignData,
					userId: userObject.staffId,
					technicianId: "",
					issueId: ""
				})
				e.target.form.reset() //Resetting the list of Sales Engineer
			} else {
				alert("Issue could not be assigned")
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
			width: 100,
			valueGetter: params => `${formatDate(params.row.createdAt)}`
			// renderCell: params => formatDate(params.row.createdAt)
		},

		{ field: "description", headerName: "Description", width: 250 },
		{ field: "user_fullname", headerName: "Issuer", width: 200 },
		{ field: "type", headerName: "Issue Type", width: 150 },
		{ field: "assignedBy", headerName: "Assign By" },
		{ field: "assignedTo", headerName: "Assigned To" },
		{ field: "status", headerName: "Status" },
		{
			headerName: "Action",
			sortable: false,
			width: 250,
			renderCell: params => (
				<Row>
					<Col>
						<span>
							<form onSubmit={assignOfficer} id={params.row.id}>
								<select
									name="officer"
									onChange={handleSelect}
									data-id={params.row.id}
									required
								>
									<option value="">Select officer</option>
									{officersList.map((value, id) => {
										return (
											<option
												key={id}
												value={value.staffId}
											>
												{value.staffFullname}
											</option>
										)
									})}
								</select>{" "}
								<button className="btn-success ml-4">
									Assign
								</button>
							</form>
						</span>
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
		{ field: "issuer", headerName: "Issuer" },
		{ field: "description", headerName: "Description" },
		{ field: "createdAt", headerName: "Created At" },
		{ field: "type", headerName: "Issue Type" },
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
				<Row>
					<Col>
						<span style={{ display: "flex" }}>
							<i className="bi bi-a-fill text-primary">Resolve</i>
						</span>
					</Col>
				</Row>
			)
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
					return params.row.assignedTo
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

	useEffect(() => {
		//getOfficersList()
		getData()
	}, [1])
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid rows={data} columns={columns} density="compact" />
		</div>
	)
}

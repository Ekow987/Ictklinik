import { Col } from "react-bootstrap"
import { Row } from "reactstrap"
import { Axios } from "axios"
import { baseUrl, getUser } from "../../../services/Auth"
import moment from "moment"
const userObject = getUser()

/**

	 * Format Date with moment

	 * @param {string} date

	 */

const formatDate = (date, full = true) => {
	return moment(date).format("DD MMM, YYYY")
	alert("hi")
}

const officersList = () => {
	let response
	try {
		let result = Axios({
			method: "get",
			url: `${baseUrl}/api/v1/users/get-user-by-type/officer`
		})
		if (result.status) {
			console.log(
				"%cData: ",
				"background:purple; color:white; border-radius:20px",
				result.data
			)
			response = result.data
		} else {
		}
	} catch (error) {
		console.log("error", error)
	}
	return response
}

export const superUser = [
	{ field: "description", headerName: "Description", width: 250 },
	{ field: "user_fullname", headerName: "Issuer", width: 200 },
	{ field: "type", headerName: "Issue Type", width: 150 },
	{ field: "assignedBy", headerName: "Assign By" },
	{ field: "assignedTo", headerName: "Assigned To" },
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
		width: 50,
		renderCell: params => {
			return (
				<Row>
					<Col>
						<span style={{ display: "flex" }}>
							<i
								className="bi bi-trash-fill text-danger"
								id={params.row.id}
							></i>
						</span>
					</Col>
				</Row>
			)
		}
	},
	{
		headerName: "Created At",
		width: 150,
		renderEditCell: params => formatDate(params.row.createdAt)
	}
]

export const manager = [
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

export const director = [
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

export const officer = [
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

export const user = [
	{ field: "description", headerName: "Description", width: 250 },
	{
		headerName: "Created At",
		width: 150,
		renderCell: params => formatDate(params.row.createdAt)
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

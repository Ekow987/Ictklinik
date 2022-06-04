import { Col } from "react-bootstrap"
import { Row } from "reactstrap"
import { useEffect } from "react"
import { Axios } from "axios"
const userObject = JSON.parse(localStorage.getItem("userObject"))
const baseUrl = process.env.REACT_APP_SERVER
export default function Something() {
	const getOfficer = async () => {
		try {
			let result = await Axios({
				method: "get",
				url: `${baseUrl}/api/v1/users/get-user-by-type/officer`
			})
			if (result.status) {
				console.log(
					"%cData: ",
					"background:purple; color:white; border-radius:20px",
					result.data
				)
				return result.data
			} else {
			}

			// result && result.code === 200 ? navigate("/issues") : null
		} catch (error) {
			console.log("error", error)
		}
	}
	useEffect(() => {
		getOfficer()

		return () => {}
	}, [1])
}

export const superUser = [
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "user_fullname", headerName: "Issuer", width: 200  },
	{ field: "createdAt", headerName: "Created At",width: 200 },
	{ field: "type", headerName: "Issue Type", width: 150 },
	{ field: "assignedBy", headerName: "Assign By" },
	{
		field: "assignedTo",
		headerName: "Assigned To"
	},
	{
		field: "status",
		headerName: "Status",
		renderCell: params => {
			params.row.status == "Unresolved" ? (
				<Row>
					<Col>
						<button className="btn-sm btn-danger">
							{params.row.status}
						</button>
					</Col>
				</Row>
			) : (
				<Row>
					<Col>
						<button className="btn-sm btn-success">
							{params.row.status}
						</button>
					</Col>
				</Row>
			)
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
	}
]

export const manager = [
	{ field: "description", headerName: "Description" },
	{ field: "issuer", headerName: "Issuer", width: 130 },
	{ field: "createdAt", headerName: "Created At" },
	{ field: "type", headerName: "Issue Type" },
	{ field: "assignedBy", headerName: "Assign By" },
	{ field: "assignedAt", headerName: "Assigned At" },
	{ field: "taskDescription", headerName: "Task Description" },
	{ field: "assignedTo", headerName: "Assigned To" },
	{ field: "adminComment", headerName: "Admin Remarks" },
	{ field: "status", headerName: "Status", width: 160 },

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
	{ field: "status", headerName: "Status", width: 160 },

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
	{ field: "status", headerName: "Status" },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: rowData => (
			<Row>
				<Col>
					<span style={{ display: "flex" }}>
						<i className="bi bi-a-fill text-success">{rowData}</i>
					</span>
				</Col>
			</Row>
		)
	}
]

export const user = [
	{ field: "description", headerName: "Description" , width: 300 },
	{ field: "issuer", headerName: "Issuer" , width:100},
	{ field: "createdAt", headerName: "Created At", width:200 },
	{ field: "type", headerName: "Issue Type",width:130 },
	{ field: "status", headerName: "Status" }
]

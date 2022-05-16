
export const superUser = [
	{ field: "description", headerName: "Description" },
	{ field: "issuer", headerName: "Issuer" },
	{ field: "createdAt", headerName: "Created At", },
	{ field: "type", headerName: "Issue Type", },
	{ field: "assignedBy", headerName: "Assign By", },
	{ field: "assignedAt", headerName: "Assigned At", },
	{ field: "taskDescription", headerName: "Task Description",  },
	{ field: "assignedTo", headerName: "Assigned To", },
	{ field: "adminComment", headerName: "Admin Remarks", },
	{ field: "status", headerName: "Status",  },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div>
						
					</div>
					<div>
						
					</div>
					<i class="bi bi-trash-fill"></i>
				</span>
			</>
		)
	}

]

export const manager = [
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "issuer", headerName: "Issuer", width: 130 },
	{ field: "createdAt", headerName: "Created At", },
	{ field: "type", headerName: "Issue Type", },
	{ field: "assignedBy", headerName: "Assign By", },
	{ field: "assignedAt", headerName: "Assigned At", },
	{ field: "taskDescription", headerName: "Task Description", width: 300 },
	{ field: "assignedTo", headerName: "Assigned To", },
	{ field: "adminComment", headerName: "Admin Remarks", },
	{ field: "status", headerName: "Status", width: 160 },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div>
						
					</div>
					<div>
						
					</div>
					<i class="bi bi-trash-fill"></i>
				</span>
			</>
		)
	}

]
export const director = [
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "issuer", headerName: "Issuer", width: 130 },
	{ field: "createdAt", headerName: "Created At", },
	{ field: "type", headerName: "Issue Type", },
	{ field: "assignedBy", headerName: "Assign By", },
	{ field: "assignedAt", headerName: "Assigned At", },
	{ field: "taskDescription", headerName: "Task Description", width: 300 },
	{ field: "assignedTo", headerName: "Assigned To", },
	{ field: "adminComment", headerName: "Admin Remarks", },
	{ field: "status", headerName: "Status", width: 160 },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div>
						
					</div>
					<div>
						
					</div>
					<i class="bi bi-trash-fill"></i>
				</span>
			</>
		)
	}

]
export const officer = [
	{ field: "issuer", headerName: "Issuer" },
	{ field: "description", headerName: "Description"},
	{ field: "createdAt", headerName: "Created At" },
	{ field: "type", headerName: "Issue Type" },
	{ field: "assignedBy", headerName: "Assign By" },
	{ field: "assignedAt", headerName: "Assigned At" },
	{ field: "status", headerName: "Status" },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div>
						
					</div>
				</span>
			</>
		)
	}

]


export const user = [
	{ field: "description", headerName: "Description"},
	{ field: "issuer", headerName: "Issuer" },
	{ field: "createdAt", headerName: "Created At"},
	{ field: "type", headerName: "Issue Type" },
	{ field: "status", headerName: "Status"},

]
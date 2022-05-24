export const superUser = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "assignedTo", headerName: "Assigned To" },
	{ field: "requestDate", headerName: "Date" },
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

export const manager = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "assignedTo", headerName: "Assigned To" },
	{ field: "requestDate", headerName: "Date" },

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
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "assignedTo", headerName: "Assigned To" },
	{ field: "requestDate", headerName: "Date" },

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
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "requestDate", headerName: "Date" },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div></div>
				</span>
			</>
		)
	}
]

export const user = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "status", headerName: "Status" }
]

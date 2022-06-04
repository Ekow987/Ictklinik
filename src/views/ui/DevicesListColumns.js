export const superUser = [
	{ field: "deviceName", headerName: "DeviceName",width: 200 },
	{ field: "userFullname", headerName: "Requester", width: 200},
	{ field: "comment", headerName: "Purpose" , width: 200},
	{ field: "quantity", headerName: "Quantity",width: 100},
	{ field: "assignedTo", headerName: "Assigned To",width: 200},
	{ field: "requestDate", headerName: "Date",width: 200 },
	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{display: "flex" }}>
					<div></div>
					<div></div>
					<i class="bi bi-eye-fill"></i>
				</span>
			</>
		)
	}
]

export const manager = [
	{ field: "deviceName", headerName: "DeviceName",width: 200 },
	{ field: "userFullname", headerName: "Requester",width: 200},
	{ field: "comment", headerName: "Purpose",width: 200 },
	{ field: "quantity", headerName: "Quantity",width: 200 },
	{ field: "assignedTo", headerName: "Assigned To",width: 200 },
	{ field: "requestDate", headerName: "Date",width: 200 },

	{
		headerName: "Action",
		sortable: false,
		width: 300,
		renderCell: () => (
			<>
				<span style={{ display: "flex" }}>
					<div></div>
					<div></div>
					<i class="bi bi-eye-fill"></i>
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
					<i class="bi bi-eye-fill"></i>
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
	{ field: "deviceName", headerName: "DeviceName",width: 200 },
	{ field: "userFullname", headerName: "Requester",width: 200 },
	{ field: "comment", headerName: "Purpose",width: 200 },
	{ field: "quantity", headerName: "Quantity",width: 100 },
	{ field: "status", headerName: "Status",width: 200 }
]

export const superUser = [
	{ field: "deviceName", headerName: "DeviceName",width: 200},
	{ field: "userFullname", headerName: "Requester",width: 200 },
	{ field: "comment", headerName: "Purpose",width: 200 },
	{ field: "quantity", headerName: "Quantity",width: 100 },
	{ field: "assignedTo", headerName: "Assigned To",width: 100 },
	{ field: "requestDate", headerName: "Date",width: 200 },
	{
		headerName: "Status",
		sortable: false,
		width: 200,
		renderCell: params => {
			switch (params.row.status.toString()) {
				case "0":
					return (
						<span className="btn btn-sm btn-danger">
							<div>Not Provided</div>
						</span>
					)
					break
				case "1":
					return (
						<span className="btn btn-sm btn-succed">
							<div> Provided</div>
						</span>
					)
					break
			}
		}
	}
]



export const manager = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "requestDate", headerName: "Date" },
	{
		headerName: "Status",
		sortable: false,
		width: 100,
		renderCell: params => {
			switch (params.row.status.toString()) {
				case "0":
					return (
						<span className="btn btn-sm btn-danger">
							<div>Not Provided</div>
						</span>
					)
					break
				case "1":
					return (
						<span className="btn btn-sm btn-succed">
							<div> Provided</div>
						</span>
					)
					break
			}
		}
	}
]

export const director = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "requestDate", headerName: "Date" },

	{
		headerName: "Status",
		sortable: false,
		width: 100,
		renderCell: params => {
			switch (params.row.status.toString()) {
				case "0":
					return (
						<span className="btn btn-sm btn-danger">
							<div>Not Provided</div>
						</span>
					)
					break
				case "1":
					return (
						<span className="btn btn-sm btn-succed">
							<div> Provided</div>
						</span>
					)
					break
			}
		}
	}
]

export const officer = [
	{ field: "deviceName", headerName: "DeviceName" },
	{ field: "userFullname", headerName: "Requester" },
	{ field: "comment", headerName: "Purpose" },
	{ field: "quantity", headerName: "Quantity" },
	{ field: "requestDate", headerName: "Date" },

	{
		headerName: "Status",
		sortable: false,
		width: 100,
		renderCell: params => {
			switch (params.row.status.toString()) {
				case "0":
					return (
						<span className="btn btn-sm btn-danger">
							<div>Not Provided</div>
						</span>
					)
					break
				case "1":
					return (
						<span className="btn btn-sm btn-succed">
							<div> Provided</div>
						</span>
					)
					break
			}
		}
	}
]

export const user = [
	{ field: "deviceName", headerName: "Device Name", width: 200 },
	{ field: "comment", headerName: "Purpose", width: 300 },
	{ field: "quantity", headerName: "Quantity", width: 70},
	{
		headerName: "Status",
		sortable: false,
		width: 100,
		renderCell: params => {
			switch (params.row.status.toString()) {
				case "0":
					return (
						<span className="btn btn-sm btn-danger">
							<div>Not Provided</div>
						</span>
					)
					break
				case "1":
					return (
						<span className="btn btn-sm btn-succed">
							<div> Provided</div>
						</span>
					)
					break
			}
		}
	}
]

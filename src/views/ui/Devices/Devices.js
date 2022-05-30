import Axios from "axios"
import React, { useEffect, useState, useContext } from "react"
import { Form, Modal } from "react-bootstrap"
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	FormGroup,
	Input,
	Label,
	Row
} from "reactstrap"
import DevicesStatistics from "./DevicesStatistics"
import DivicesList from "./DevicesList"
import { AppContext } from "../../../components/Context/AppContext"
export default function RequestDevices() {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [devices, setDevices] = useState([])
	const [values, setValues] = useState({
		purpose: "",
		code: "",
		quantity: ""
	})
	const context = useContext(AppContext)
	const userObject = context.user
	const baseUrl = context.baseUrl

	const handleChange = e => {
		console.log(
			"%cName: ",
			"background:purple; color:white; border-radius:20px",
			e.target.name
		)
		console.log(
			"%cValue: ",
			"background:green; color:white; border-radius:20px",
			e.target.value
		)
		setValues(values => ({
			...values,
			[e.target.name]: e.target.value
		}))
	}
	function refreshPage() {
		window.location.reload(false)
	}
	const clearForms = () => {
		setValues({
			type: "",
			description: ""
		})
	}
	const handleSubmit = async e => {
		e.preventDefault()
		var myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		let dataToUpload = {
			purpose: values.purpose,
			code: values.code,
			quantity: values.quantity,
			user: userObject.staffId
		}

		try {
			let result = await Axios({
				method: "POST",
				url: `${baseUrl}/api/v1/devices-requests/add/`,
				data: dataToUpload
			})
			if (result.status) {
				clearForms()

				handleClose()

				refreshPage()
			} else {
			}
		} catch (error) {
			console.log("error", error)
		}
	}

	const getDevices = async () => {
		try {
			let result = await Axios({
				method: "get",
				url: `${baseUrl}/api/v1/devices/`
			})
			if (result.status) {
				console.log(
					"%cData: ",
					"background:purple; color:white; border-radius:20px",
					result.data.data
				)
				setDevices(result.data.data)
			} else {
			}
		} catch (error) {
			console.log("error", error)
		}
	}

	useEffect(() => {
		getDevices()
	}, [1])
	return (
		<>
			<DevicesStatistics />
			<Container>
				<Row className="mb-3">
					<Col className="col-lg-3">
						<Button
							className="btn btn-success"
							onClick={handleShow}
						>
							Add New Request
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<CardHeader className="bg-success text-white">
								Pending Devices Requests
							</CardHeader>
							<CardBody>
								<DivicesList />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>

			<Modal show={show} onHide={handleClose}>
				<Form onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Request Device</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<Label for="exampleSelect">Device Type</Label>
							<Input
								id="exampleSelect"
								name="code"
								type="select"
								required
								onChange={handleChange}
							>
								<option value="">Select Device </option>
								{devices.map((value, index) => {
									return (
										<option
											key={index}
											value={value.device_code}
										>
											{value.device_name}
										</option>
									)
								})}
							</Input>
						</FormGroup>
						<FormGroup>
							<Label for="quantity"> Quantity</Label>
							<Input
								id="quantity"
								name="quantity"
								type="text"
								required
								onChange={handleChange}
							></Input>
						</FormGroup>
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Input
								name="purpose"
								type="textarea"
								onChange={handleChange}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="primary"
							type="submit"
							onClick={handleShow}
						>
							Request Device
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	)
}

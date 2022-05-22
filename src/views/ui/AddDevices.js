import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Input, Label, FormGroup,Card} from "reactstrap"

export default function AddDevices() {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [devices, setDevices] = useState([])

	const handleFetch = () => {
		var myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		var requestOptions = {
			method: "GET",
			headers: myHeaders
		}
		try {
			fetch("http://localhost:5000/api/v1/devices/")
				.then(response => response.json())
				.then(result => {
					/**
					 *further processes may come in
					 */
					console.log(result)
					setDevices(result.data)
					// result && result.code === 200 ? navigate("/issues") : null
				})
				.catch(error => console.log("error", error))
		} catch (error) {
			console.log("error", error)
		}
	}
	return (
		<div id="move">
			<Card body>
			<Button variant="primary" onClick={handleShow} >
				Request Devices
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Request Device</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<FormGroup>
							<Label for="exampleSelect">Device Type</Label>
							<Input
								id="exampleSelect"
								name="code"
								type="select"
							>
                 <option>Hp lasserjet</option>
                <option>Dell laptop</option>
              </Input>
						</FormGroup>
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Input name="description" type="textarea" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleShow}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			</Card>
		</div>
	)
}

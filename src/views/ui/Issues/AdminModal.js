import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { FormGroup, Label, Input } from "reactstrap"
export default function AdminModal() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Assign
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Assign An officer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<FormGroup>
							<Label for="exampleSelect">Officer Unit</Label>
							<Input
								name="type"
								type="select"
								required
							>
								<option value="">Select Unit</option>
								<option value="">
									Database And Application Unit
								</option>
                <option value="">
									Network And System Administration
								</option>
                <option value="">
									User Support
								</option>
								
								{/* <option>3</option>
                <option>4</option>
                <option>5</option> */}
							</Input>
						</FormGroup>
						<FormGroup>
							<Label for="exampleSelect">Assign To:</Label>
							<Input
								id="exampleSelect"
								name="type"
								type="select"
								required
							>
								<option value="">Select Officer</option>
								<option value=""></option>
								<option value=""></option>
								{/* <option>3</option>
                <option>4</option>
                <option>5</option> */}
							</Input>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Assign
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

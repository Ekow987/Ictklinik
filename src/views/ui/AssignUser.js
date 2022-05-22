import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { Input, FormGroup, Label } from "reactstrap"
import Axios from "axios"

export default function AssignButton() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const [values, setValues] = useState({
		assignedTo: "",
		taskDescription: ""
	})

	const refreshPage = () => {
		window.location.reload(false)
	}

	const handleChange = e => {
		setValues(values => ({
			...values,
			[e.target.name]: e.target.value
		}))
	}

	const clearForms = () => {
		setValues({
			assignedTo: "",
			taskDescription: ""
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!values.assignedTo || !values.taskDescription) {
			return
		}
		if (values.assignedTo || values.taskDescription) {
		}

		try {
			const result = await Axios({
				method: "POST",
				url: "http://localhost:5000/api/v1/issues/add/",
				data: values
			})
			setValues(result.data)
		} catch (error) {
			console.log(error)
		}

		// try {
		//   const sendText = await Axios({
		//     method:"POST",
		//     url:"http://localhost:5000/api/v1/"
		//   })

		// } catch (error) {

		// }

		await clearForms()

		handleClose()

		refreshPage()
	}

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Assign
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Assign User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<FormGroup>
							<Label for="exampleSelect">Assign To</Label>
							<Input
								id="exampleSelect"
								name="assignedTo"
								type="select"
								value={values.assignedTo}
								onChange={handleChange}
							>
								<option>Seth</option>
								<option>Eugiene</option>
							</Input>
						</FormGroup>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="taskDescription"
								value={values.taskDescription}
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

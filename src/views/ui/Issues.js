import Axios from "axios"
import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import {
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
import DashboardCards from "../../components/Card"
import IssuesList from "./IssuesList"

const Issues = () => {
	const userObject = JSON.parse(localStorage.getItem("userObject"))
	const baseUrl = process.env.REACT_APP_SERVER

	const [show, setShow] = useState(false)
	const [values, setValues] = useState({
		type: "",
		description: ""
	})

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	function refreshPage() {
		window.location.reload(false)
	}

	const handleChange = e => {
		console.log(e.target.name)
		setValues(values => ({
			...values,
			[e.target.name]: e.target.value
		}))
	}

	const clearForms = () => {
		setValues({
			type: "",
			description: ""
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		let dataToUpload = {
			description: values.description,
			type: values.type,
			issuer: userObject.staffId
		}
		try {
			let result = await Axios({
				method: "POST",
				url: `${baseUrl}/api/v1/issues/add/`,
				data: dataToUpload
			})
			setValues(result.data)
		} catch (error) {
			console.log(error)
		}

		clearForms()

		handleClose()

		refreshPage()
	}
	return (
		<>
			<Container>
				<Row>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Total Issues" text={100} />
					</Col>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Pending" text={100} />
					</Col>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Resolved" text={100} />
					</Col>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Rate" text={100} />
					</Col>
				</Row>
			</Container>

			<Container>
				<Row className="mb-3">
					<Col className="col">
						<Button
							className="btn btn-primary mr-5 mt-2"
							onClick={handleShow}
						>
							New Issues
						</Button>{" "}
						<Button
							className="btn btn-danger mr-2 mt-2"
							disabled
							title="Coming Soon"
						>
							Pending Issues
						</Button>{" "}
						<Button
							className="btn btn-secondary mr-2 mt-2"
							disabled
							title="Coming Soon"
						>
							Resolved Issues
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<CardHeader style={{backgroundColor:"#1bc5bd"}}>
								Pending Issues
							</CardHeader>
							<CardBody>
								<IssuesList />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>

			<Modal show={show} onHide={handleClose}>
				<Form onSubmit={handleSubmit}>
					<Modal.Header closeButton className="bg-success text-white">
						<Modal.Title>Add New issue</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<Label for="exampleSelect">Issue Type</Label>
							<Input
								id="exampleSelect"
								name="type"
								type="select"
								value={values.type}
								onChange={handleChange}
								required
							>
								<option value="">Select Issue</option>
								<option value="printing issues">
									Printing Issue
								</option>
								<option value="internet issues">
									Internet Issue
								</option>
								{/* <option>3</option>
                <option>4</option>
                <option>5</option> */}
							</Input>
						</FormGroup>

						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Input
								name="description"
								type="textarea"
								value={values.description}
								onChange={handleChange}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="success" type="submit">
							Send
						</Button>
					</Modal.Footer>{" "}
				</Form>
			</Modal>
		</>
	)
}

export default Issues

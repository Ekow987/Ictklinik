import Axios from "axios"
import React, { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TrainingCard from "../../components/TrainingCard"
export default function RequestTraining() {
	const [trainingList, setTrainingList] = useState([])
	const userObject = JSON.parse(localStorage.getItem("userObject"))
	const baseUrl = process.env.REACT_APP_SERVER

	const getTrainingList = async () => {
		try {
			let result = await fetch(`${baseUrl}/api/v1/trainings/`, {
				headers: {
					"Content-Type": "application/json"
				}
			})
			const response = await result.json()
			response.data ? setTrainingList(response.data) : setTrainingList([])
		} catch (error) {
			console.log(error)
		}
	}
	const getUserTrainingList = async () => {
		try {
			let result = await fetch(
				`${baseUrl}/api/v1/trainings-requests/user-requests/${userObject.staffId}`,
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			const response = await result.json()
			response.data ? setTrainingList(response.data) : setTrainingList([])
		} catch (error) {
			console.log(error)
		}
	}
	const onClick = async e => {
		let dataToUpload = {
			comment: "Not applicable", //don't leave the comment empty
			code: e.target.id,
			user: userObject.staffId
		}
		try {
			let result = await Axios({
				method: "POST",
				url: `${baseUrl}/api/v1/trainings-requests/add/`,
				data: dataToUpload
			})
		} catch (error) {
			console.log(error)
		}
	}
	const onDelete = async e => {
		try {
			let result = await Axios({
				method: "POST",
				url: `${baseUrl}/api/v1/trainings-requests/delete/${e.target.id}`
			})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getTrainingList()
	}, [1])
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<CardHeader className="bg-secondary text-white">
							Menu
						</CardHeader>

						<CardBody>
							<div
								className="btn-group"
								role="group"
								aria-label="Basic radio toggle button group"
							>
								<input
									type="radio"
									className="btn-check"
									name="btnradio"
									id="btnradio1"
									autocomplete="off"
								/>
								<label
									className="btn btn-outline-dark"
									onClick={getTrainingList}
									for="btnradio1"
								>
									All Trainings
								</label>

								<input
									type="radio"
									className="btn-check"
									name="btnradio"
									id="btnradio2"
									autocomplete="off"
								/>
								<label
									className="btn btn-outline-dark"
									onClick={getUserTrainingList}
									for="btnradio2"
								>
									My trainings
								</label>
							</div>
							{/* <ul className="list-group">
								<li
									className="list-group-item"
									onClick={getTrainingList}
								>
									All Trainings
								</li>
								<li
									className="list-group-item"
									onClick={getUserTrainingList}
								>
									My trainings
								</li>
							</ul> */}
						</CardBody>
					</Card>
				</Col>
			</Row>
			{/* <Row> */}
			{/* <Col className="col-xl-9 col-lg-9 col-md-6 col-sm-10"> */}
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{trainingList.map((value, index) => {
					return (
						<TrainingCard
							key={index}
							title={value.trainingName}
							text={value.description}
							image={value.image}
							data={value}
							subscribe={onClick}
							unsubscribe={onDelete}
						/>
					)
				})}
			</div>
			{/* </Col> */}
			{/* </Row> */}
		</Container>
	)
}

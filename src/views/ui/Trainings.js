import React, { useEffect, useState } from "react"
import {
	Col,
	Container,
	Row,
	Card,
	CardHeader,
	CardBody,
	CardFooter
} from "reactstrap"
import TrainingCard from "../../components/TrainingCard"
export default function RequestTraining() {
	const [trainingList, setTrainingList] = useState({})

	const getTrainingList = () => {}

	useEffect(() => {
		getTrainingList()
	}, [1])
	return (
		<Container>
			<Row>
				<Col className="col-xl-9 col-lg-9 col-md-6 col-sm-10">
					<TrainingCard
						title="Training"
						text="Request for ict training"
					/>
				</Col>
				<Col className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
					<Card>
						<CardHeader className="bg-secondary text-white">
							Customise
						</CardHeader>
						<CardBody></CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

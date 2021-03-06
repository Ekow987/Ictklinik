import React, { useEffect } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import IssuesList from "./IssuesList"
import IssuesStatistics from "./IssuesStatistics"

const Issues = () => {
	const userObject = JSON.parse(localStorage.getItem("userObject"))

	function refreshPage() {
		window.location.reload(false)
	}

	useEffect(() => {
		// refreshPage()
	}, [1])

	return (
		<>
			{userObject.type == "user" ? "" : <IssuesStatistics />}
			<Container>
				<Row>
					<Col>
						<Card>
							<CardHeader className="bg-success text-white">
								Pending Issues
							</CardHeader>
							<CardBody>
								<IssuesList />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Issues

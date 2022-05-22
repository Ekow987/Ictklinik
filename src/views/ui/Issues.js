import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import DashboardCards from "./Card"
import PendingIssues from "./IssuesDisplay"
import AddIssues from "./AddIssues"
import * as React from "react"

const Issues = () => {
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
				<Row>
					<AddIssues />
				</Row>
				<Row>
					<Col>
						<Card>
							<CardHeader className="bg-primary text-white">
								Pending Issues
							</CardHeader>
							<CardBody>
								<PendingIssues />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Issues

import React from "react"
import { Col, Container, Row } from "reactstrap"
import DashboardCards from "../../../components/Card"
function IssuesStatistics(props) {
	return (
		<Container>
			<Row>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards title="Total Issues" text={50} />
				</Col>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards title="Pending Issues" text={70} />
				</Col>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards title="Resolved" text={30} />
				</Col>
			</Row>
		</Container>
	)
}

export default IssuesStatistics

import React from "react"
import { Col, Container, Row } from "reactstrap"
import DashboardCards from "../../../components/Card"
function DevicesStatistics(props) {
	return (
		<Container >
			<Row >
				<Col className=" col-lg-4 col-md-4 col-sm-6" >
					<DashboardCards title="Total Devices" text={50}  />
				</Col>
				<Col className=" col-lg-4 col-md-4 col-sm-6">
					<DashboardCards title="Pending Devices" text={70}  />
				</Col>
				<Col className=" col-lg-4 col-md-4 col-sm-6">
					<DashboardCards title="Given Out" text={30} />
				</Col>
			</Row>
		</Container>
	)
}

export default DevicesStatistics

import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import DashboardCards from "./Card"
import PendingDevices from "./DevicesDisplay"
import AddDevices from "./AddDevices"

export default function RequestDevices() {
	return (
		<>
			<Container>
				<Row>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Total Devices" text={50} />
					</Col>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Pending Devices" text={70} />
					</Col>
					<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
						<DashboardCards title="Given Out" text={30} />
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<AddDevices />
				</Row>
				<Row>
					<Col>
						<Card>
							<CardHeader className="bg-primary text-white">
								Pending Devices Requests
							</CardHeader>
							<CardBody>
								<PendingDevices />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

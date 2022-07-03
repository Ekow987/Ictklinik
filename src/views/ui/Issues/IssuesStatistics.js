import React, { useState, useEffect, useContext } from "react"
import { Col, Container, Row } from "reactstrap"
import DashboardCards from "../../../components/Card"
import { AppContext } from "../../../components/Context/AppContext"
function IssuesStatistics(props) {
	const [statistics, setStatistics] = useState()
	const { getStatistics } = useContext(AppContext)

	useEffect(() => {
		getStatistics().then(response => {
			response.data ? setStatistics(response.data) : setStatistics([])
		})
	}, [1])

	return statistics ? (
		<Container>
			<Row>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards
						title="Total Issues"
						text={
							Number(statistics[0]?.resolved) +
							Number(statistics[0]?.unresolved)
						}
					/>
				</Col>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards
						title="Pending Issues"
						text={Number(statistics[0]?.unresolved)}
					/>
				</Col>
				<Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<DashboardCards
						title="Resolved"
						text={statistics[0]?.resolved}
					/>
				</Col>
			</Row>
		</Container>
	) : (
		<div className="spinner-grow" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	)
}

export default IssuesStatistics

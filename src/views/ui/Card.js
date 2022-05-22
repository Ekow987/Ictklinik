import { Card, CardText, CardBody, CardTitle } from "reactstrap"

const DashboardCard = ({ title, text }) => {
	return (
		<div>
			<Card
				style={{
					"background-image":
						"url(../../assets/images/bg/card-bg.png);"
				}}
			>
				<CardBody>
					<CardTitle className="fw-bold">{title}</CardTitle>
					<CardText>{text}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}

export default DashboardCard

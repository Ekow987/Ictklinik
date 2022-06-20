import { Card, CardText, CardBody, CardTitle } from "reactstrap"


const DashboardCard = ({ title, text }) => {
	return (
		<div style={{marginLeft:50}}>
			
			<Card
				style={{
					width:270
				}}
			>
				
				
				<CardBody  style={{background: "linear-gradient(#e66465, #9198e5)"}}>
					<CardTitle className="fw-bold" style={{color:"white"}}>{title}</CardTitle>
					<CardText style={{color:"white"}}>{text}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}

export default DashboardCard

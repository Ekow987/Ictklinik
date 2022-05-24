import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardGroup,
	CardImg,
	Row,
	Col,
	Button
} from "reactstrap"

export default function TrainingCard() {
	return (
		<Card id="cardChange">
			<CardImg
				alt="Card image cap"
				src="https://yakimaparks.com/assets/microsoftexcel-1.jpg"
				top
				width="100%"
			/>
			<CardBody>
				<CardTitle tag="h5">Training Description</CardTitle>
				<CardText>Excel Training</CardText>
				<Button>Request</Button>
			</CardBody>
		</Card>
	)
}

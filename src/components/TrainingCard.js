import {
	Button,
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle
} from "reactstrap"

export default function TrainingCard({ image, title, text, data }) {
	return (
		<Card id="cardChange">
			<CardImg
				alt="Card image cap"
				src="https://yakimaparks.com/assets/microsoftexcel-1.jpg"
				top
				width="100%"
			/>
			<CardBody>
				<CardTitle tag="h5">{title}</CardTitle>
				<CardText>{text}</CardText>
				<Button id={data?.id}>Request</Button>
			</CardBody>
		</Card>
	)
}

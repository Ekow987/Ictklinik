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
			<CardImg alt="Card image cap" src={image} top width="100%" />
			<CardBody>
				<CardTitle tag="h5">{title}</CardTitle>
				<CardText>{text}</CardText>
				{data.comment ? (
					<Button className="btn-sm btn-dark" id={data?.requestId}>
						subscribed
					</Button>
				) : (
					<Button className="btn-sm btn-success" id={data?.id}>
						Request
					</Button>
				)}
			</CardBody>
		</Card>
	)
}

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

export default function TrainingCards() {
	return (
		<div>

  <Row xs="2">
    <Col className="bg-light border" style={{width:230,marginLeft:-17,marginBottom:-600,height:300}}>
      <p>Leaving space here</p>
    </Col>
    <Col className="bg-light border col-xl-12 col-lg-10 col-md-5 col-sm-5" style={{ marginLeft:220 }}>
	<CardGroup>
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
				<Card  id="cardChange">
					<CardImg
						alt="Card image cap"
						src="https://heraldjournalism.com/wp-content/uploads/2021/01/microsoft_word_2013.jpg"
						top
						width="100%"
					/>
					<CardBody>
						<CardTitle tag="h5">Training Description</CardTitle>
						<CardText>Microsoft Word Training</CardText>
						<Button>Request</Button>
					</CardBody>
				</Card>
				<Card  id="cardChange">
					<CardImg
						alt="Card image cap"
						src="https://hplibrary.org/images/evgients/hplibrary/Powerpoint.jpg"
						top
						width="100%"
					/>
					<CardBody>
						<CardTitle tag="h5">Training Description</CardTitle>
						<CardText>PowerPoint Training</CardText>
						<Button>Request</Button>
					</CardBody>
				</Card>

                <Card  id="cardChange">
					<CardImg
						alt="Card image cap"
						src="https://1.bp.blogspot.com/-w80k0yrbXpk/YHsXRjBZCCI/AAAAAAAABIk/ZVSI3P87iYEuNfZEBY9Qm1FSFSEe1muSwCLcBGAsYHQ/s640/6_Advantages_and_Disadvantages_of_Web_Application_Drawbacks_%2526_Benefits_of_Web_Application.jpg"
						top
						width="100%"
					/>
					<CardBody>
						<CardTitle tag="h5">Training Description</CardTitle>
						<CardText>Software Usage </CardText>
						<Button>Request</Button>
					</CardBody>
				</Card>
               
			</CardGroup>

    </Col>
	</Row>
		</div>
	)
}

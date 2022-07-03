import React from "react"
import {Form,FormGroup,Label,Col,Input,Row,Button,Card} from "reactstrap"

export default function Report() {
	return (
		<div>
            <Card body>
			<Form>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleDate">Date from:</Label>
							<Input
								name="date"
								type="date"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleDate">Date to: </Label>
							<Input
								name="date"
								type="date"
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
                    <FormGroup>
							<Label for="exampleSelect">Issue Type</Label>
							<Input
								id="exampleSelect"
								name="issues"
								type="select"
							>
                 <option>Pending Issues</option>
                <option>Resolved Issues</option>
                <option>Unresolved Issues</option>
              </Input>
						</FormGroup>
					</Col>
				</Row>
				{/* <FormGroup>
					<Label for="exampleAddress2">Address 2</Label>
					<Input
						id="exampleAddress2"
						name="address2"
						placeholder="Apartment, studio, or floor"
					/>
				</FormGroup>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleCity">City</Label>
							<Input id="exampleCity" name="city" />
						</FormGroup>
					</Col>
					<Col md={4}>
						<FormGroup>
							<Label for="exampleState">State</Label>
							<Input id="exampleState" name="state" />
						</FormGroup>
					</Col>
					<Col md={2}>
						<FormGroup>
							<Label for="exampleZip">Zip</Label>
							<Input id="exampleZip" name="zip" />
						</FormGroup>
					</Col>
				</Row>
				<FormGroup check>
					<Input id="exampleCheck" name="check" type="checkbox" />
					<Label check for="exampleCheck">
						Check me out
					</Label>
				</FormGroup> */}
				<Button>Generate</Button>
			</Form>
            </Card>
		</div>
	)
}

import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input
  } from "reactstrap";
  
  const Forms = () => {
  
    return (
      <Row className="push">
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              REQUEST STATUS
            </CardTitle>
            <CardBody>
              <Form>
              <FormGroup>
                <Label for="exampleEmail">Staff ID</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Staff ID"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Staff Name</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Staff Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                  <Label for="exampleSelect">Division</Label>
                  <Input id="exampleSelect" name="select" type="select">
                  <option>Audit Unit</option>
                  <option>Corporate Affairs and Media Relations</option>
                  <option>Climate Change Unit</option>
                  <option>Chief Executive's Office</option>
                  <option>Corporate Planning Monitoring and Evaluation</option>
                  <option>Estate Unit</option>
                  <option>Finance and Administration Department</option>
                  <option>Forestry Commission Headquarters</option>
                  <option>Forestry Commission Training Centre</option>
                  <option>Forest Services Division</option>
                  <option>Human Resource Department</option>
                  <option>Information and Communication Technology Department</option>
                  <option>Procurement Unit</option>
                  <option>Plantations Department</option>
                  <option>Resource Management Support Centre</option>
                  <option>Stores Unit</option>
                  <option>Timber Industry Development Division</option>
                  <option>Timber Rights and Administration Unit</option>
                  <option>Transport Unit</option>
                  <option>Timber Validation Department</option>
                  <option>Wildlife Division</option>
                  </Input>
                </FormGroup>
              <FormGroup>
                  <Label for="exampleSelect">Status</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Pending</option>
                    <option>Solved</option>
                    <option>Troubleshooting</option>
                    <option>Forwarded to Director</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Remarks</Label>
                  <Input
                    id="examplePassword"
                    name="remarks"
                    placeholder="Staff Name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Comment</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>

                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Forms;
  
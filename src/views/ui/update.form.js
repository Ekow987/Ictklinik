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
  import {useNavigate } from "react-router-dom";
  const Forms = () => {

    const navigate = useNavigate();

    const ChangePage= () => {
        navigate('/forms')
      }
    

    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
               UPDATE STAFF DETAILS
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
                  <Label for="examplePassword">Station</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Station"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Region</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Greater Accra</option>
                    <option>Ashanti</option>
                    <option>Eastern</option>
                    <option>Northern</option>
                    <option>Central</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Case Type</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Request For Equipment Servicing</option>
                    <option>Request For ICT Training</option>
                    <option>Request For User Account</option>
                    <option>Request For Official Email</option>
                    <option>Borrow ICT Equipment For Meeting</option>
                    <option>Others</option>
                  </Input>
                </FormGroup>
  
                <FormGroup>
                  <Label for="exampleSelect">Case Unit</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>User Support Unit</option>
                    <option>Programming Unit </option>
                    <option>Networking Unit</option>
                    <option>Emerging Technolgies</option>
                  </Input>
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
                  <Label for="exampleEmail">Case Summary</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Summary"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Case Details</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  <FormText>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Radio Buttons</legend>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option one is this and that—be sure to include why it's
                      great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option two can be something else and selecting it will
                      deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Input disabled name="radio1" type="radio" />{" "}
                    <Label check>Option three is disabled</Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" /> <Label check>Check me out</Label>
                </FormGroup> */}
                <Button>Submit</Button>
                <Button id="move" onClick={ChangePage}>Cancel</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Forms;
  
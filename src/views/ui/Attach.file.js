import { useState } from "react";
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
  Input,
} from "reactstrap";

const Forms = () => {
  
  const [Title,setTitle] = useState("");

  const handleTitle =(e)=>{
      setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };


 

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            ATTACH REPORT FILE
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Report Title</Label>
                <Input
                  value={Title}
                  onChange={handleTitle}
                  id="exampleEmail"
                  name="title"
                  placeholder="Enter Title"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
              
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;

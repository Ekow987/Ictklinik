import {useState} from "react";
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



const IssueForm = () => {
  const navigate = useNavigate();
  const [Issuer,setIssuer] = useState("");
  const [Description,setDescription] = useState("");


  const handleIssuer =(e)=>{
     setIssuer(e.target.value)
  }

  const handleDescription =(e)=>{
      setDescription(e.target.value)
  }

 

  const handleSubmit =(e)=>{
    e.preventDefault();
  }
 

  const ChangePage= (e) => {
    navigate('/training');
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
            REPORT ISSUES
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Issuer</Label>
                <Input
                  value={Issuer}
                  onChange={handleIssuer}
                  id="exampleEmail"
                  name="training"
                  placeholder="Name Of Issuer"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input id="exampleText" name="text" type="textarea" value={Description} onChange={handleDescription}/>
              </FormGroup>
              <Button onClick={handleSubmit} >Submit</Button>
              <Button id="move" onClick={ChangePage}>Cancel</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default IssueForm;

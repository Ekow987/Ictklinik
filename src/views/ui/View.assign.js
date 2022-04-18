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
import Item from "../ui/list.staff"



const Forms = () => {
  const navigate = useNavigate();
  const [Fullname,setFullname] = useState("");
  const [Mobile, setMobile] =useState("");
  const [Description,setDescription] =useState("");
  
 const handleFullname =(e)=>{
    setFullname(e.target.value);
 }

 const handleMobile =(e)=>{
   setMobile(e.target.value);
 }

 const handleDescription =(e)=>{
  setDescription(e.target.value);
 }

 
 
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate('/view');
  }
   

  

  return (
    <div>
      <Item/>
    <Row id="list">
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            SEND SMS 
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Fullname</Label>
                <Input
                 value={Fullname}
                 onChange={handleFullname}
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Fullname"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Mobile number</Label>
                <Input
                  value={Mobile}
                  onChange={handleMobile}
                  id="mobile"
                  name="mobile"
                  maxLength={10}
                  placeholder="Enter Mobile number"
                  type="number"
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input id="description" name="text" type="textarea" value={Description} onChange={handleDescription}/>
              </FormGroup>
              <Button onClick={handleSubmit}>Send</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Forms;

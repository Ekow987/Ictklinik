import React,{useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import toast, { Toaster } from 'react-hot-toast';
import Modal from "react-bootstrap/Modal"
import Axios from "axios";



export default function Example() {
  const [show, setShow] = useState(false);
  const [values,setValues] =useState({
    resolveComment:""
  })

  const handleComment =(e)=>{
    setValues(values=>({
      ...values,
      [e.target.name]:e.target.value
    }))
  }

  const clearForms = () => {
    setValues({
      resolveComment:""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.resolveComment) {
      toast('All fields are required');
      return;
    }


   try {
     
    let result = await Axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/issues/add/",
      data: values,
    });
    console.log(result.data);
    setValues(result.data);
     
   } catch (error) {
    console.log(error);
   }
   toast('Comment Submitted Succussfully');
    clearForms();
    
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD COMMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="Enter Name"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} name="resolveComment" value={values.resolveComment} onChange={handleComment}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
          <Toaster/>
        </Modal.Footer>
      </Modal>
    </>
  );
}















































// import { useNavigate } from "react-router-dom";
// import {
//     Card,
//     Row,
//     Col,
//     CardTitle,
//     CardBody,
//     Button,
//     Form,
//     FormGroup,
//     Label,
//     Input
//   } from "reactstrap";
  
//   const Forms = () => {
//     const navigate = useNavigate();

//     const handlePress =()=>{
//         navigate("/cards")
//     }
//     return (
//       <Row className="push">
//         <Col>
//           {/* --------------------------------------------------------------------------------*/}
//           {/* Card-1*/}
//           {/* --------------------------------------------------------------------------------*/}
//           <Card>
//             <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//               <i className="bi bi-bell me-2"> </i>
//               CHANGE USER ROLE
//             </CardTitle>
//             <CardBody>
//               <Form>
//               <FormGroup>
//                 <Label for="exampleEmail">Staff ID</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="Enter Staff ID"
//                   type="number"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">Staff Name</Label>
//                 <Input
//                   id="examplePassword"
//                   name="password"
//                   placeholder="Staff Name"
//                   type="text"
//                 />
//               </FormGroup>
//               <FormGroup>
//                   <Label for="exampleSelect">Division</Label>
//                   <Input id="exampleSelect" name="select" type="select">
//                   <option>Audit Unit</option>
//                   <option>Corporate Affairs and Media Relations</option>
//                   <option>Climate Change Unit</option>
//                   <option>Chief Executive's Office</option>
//                   <option>Corporate Planning Monitoring and Evaluation</option>
//                   <option>Estate Unit</option>
//                   <option>Finance and Administration Department</option>
//                   <option>Forestry Commission Headquarters</option>
//                   <option>Forestry Commission Training Centre</option>
//                   <option>Forest Services Division</option>
//                   <option>Human Resource Department</option>
//                   <option>Information and Communication Technology Department</option>
//                   <option>Procurement Unit</option>
//                   <option>Plantations Department</option>
//                   <option>Resource Management Support Centre</option>
//                   <option>Stores Unit</option>
//                   <option>Timber Industry Development Division</option>
//                   <option>Timber Rights and Administration Unit</option>
//                   <option>Transport Unit</option>
//                   <option>Timber Validation Department</option>
//                   <option>Wildlife Division</option>
//                   </Input>
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="examplePassword">Old password</Label>
//                   <Input
//                     id="examplePassword"
//                     name="password"
//                     placeholder="Enter password"
//                     type="text"
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="exampleText">New Password</Label>
//                   <Input id="exampleText" name="new password" type="password" placeholder="Enter password" />
//                 </FormGroup>

//                 <Button>Submit</Button>
//                 <Button id="reset" onClick={handlePress}>Cancel</Button>
//               </Form>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     );
//   };
  
//   export default Forms;
  
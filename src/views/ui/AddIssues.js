import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { Input, Label, FormGroup } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";


export default function AddIssues() {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    type:"",
    description: "",
  });
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function refreshPage() {
    window.location.reload(false);
  }

 

  const handleIssuerChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(values);

  const clearForms = () => {
    setValues({
      type:"",
      description: "",
    });
  };

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.type || !values.description) {
      toast("All fields are required");
      return;
    }

    if(values.type || values.description){
      toast("Issue Added Successfully");
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
    
    await clearForms();
   
    handleClose();
    
   refreshPage();
    
   
  
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow} id="push">
        New Issues
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New issues</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Issue Type</Label>
              <Input id="exampleSelect" name="type" type="select" value={values.type} onChange={handleIssuerChange}>
                <option>Printing Issue</option>
                <option>Internet Issue</option>
                {/* <option>3</option>
                <option>4</option>
                <option>5</option> */}
              </Input>
            </FormGroup>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Input
                name="description"
                type="textarea"
                value={values.description}
                onChange={handleIssuerChange}
              />
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
          <Toaster />
        </Modal.Footer>
      </Modal>
    </>
  );
}



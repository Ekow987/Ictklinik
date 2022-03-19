import React from "react";
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';
import Logo from "../assets/images/logos/logo12.jpg";
import {Link}  from "react-router-dom";

export default function Login (){

  return(
    <div className="App">
    <h2 id="log">Login</h2>
    <h2 id="mov">ICT KLINIK</h2>
    <h2 id="mov">ADMIN ONLY</h2>
    <img  
              id="none"
              src={Logo}
              alt="profile"
              width="170"
              height={100}
            ></img>
    <Form className="form" >
      <FormGroup className="search-wrap">
        <Label for="exampleEmail">Staff Id</Label>
        <Input
        id="see"
          type="number"
          name="staff id"
          placeholder="Enter Staff Id"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
        id="see"
          type="password"
          name="password"
          placeholder="********"
        />
      </FormGroup>
   <Button><Link to="/cards">Login</Link></Button> 
  </Form>
</div>

  );
}
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Logo from "../../assets/images/logos/logo12.jpg";
import {useNavigate}  from "react-router-dom";
import Signup from "./Signup";
// import Axios from "axios";

export default function Login() {
  const navigate =useNavigate();
  // const [staff, setStaff] = useState({
  //   staffId: "",
  //   password: ""
  // });
  // const [loginError, setLoginError] = useState(false);

  // const handleChange = (e) => {
  //   setStaff((values) => ({
  //     ...values,
  //     [e.target.name]: e.target.values,
  //   }));
  // };
     
  const handlePress =()=>{
    navigate("/issues")
  }
  // const handleLogin = async () => {
  // try {
  //     setLoginError(false);
  //     let res = await Axios({
  //       method:"POST",
  //       url:"",
  //       data:staff
  //     });

  //     const { message, data } = res.data;
  //    if (message === "User does not exist") {
  //        console.log("User does not exist")
  //        setLoginError(true);
  //        return;
  //    }

      
//      if (data) {
//         setStaff(data);
//         switch(data.role){
//            case 1:
//              "do something"
//              break
//              case 2:
//                "do something"
//                break
//                case 3:
//                  "do something"
//                  default:
//                  break
//         }
    
//   } 
// }catch (error) {
//   console.log(error);
// }

  

     
  return (
    <div className="App">
      <h2 id="log">Login</h2>
      <h2 id="mov">ICT KLINIK</h2>
      <img id="none" src={Logo} alt="profile" width="170" height={100}></img>
      <Form className="form">
        <FormGroup className="search-wrap"> 
          {/* isInvalid={loginError} */}
          <Label for="exampleEmail">Staff Id</Label>
          <Input
            id="see"
            // value={staff.staffId}
            // onChange={handleLogin}
            type="number"
            name="staffId"
            placeholder="Enter Staff Id"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="see"
            type="password"
            // value={staff.password}
            // onChange={handleChange}
            name="password"
            placeholder="********"
          />
        </FormGroup>
        <Button onClick={handlePress}>Login</Button>
        <Signup />
      </Form>
    </div>
  );
  }


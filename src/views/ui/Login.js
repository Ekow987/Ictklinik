import React from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import Logo from "../../assets/images/logos/logo12.jpg"
import { useNavigate } from "react-router-dom"
import Signup from "./Signup"
// import Axios from "axios";

export default function Login() {
	const navigate = useNavigate()
	const [state, setState] = useState({
		username: "",
		password: ""
	})
	// const [loginError, setLoginError] = useState(false);

	// const handleChange = (e) => {
	//   setStaff((values) => ({
	//     ...values,
	//     [e.target.name]: e.target.values,
	//   }));
	// };

	const handleState = e => {
		const { name, value } = e.target
		setState({ ...state, [name]: value.trim() })
	}

	const handlePress = e => {
		var myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		var raw = JSON.stringify({
			username: state.username,
			password: md5(state.password)
		})

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		}

		fetch("http://localhost:5000/api/v1/users/login/", requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log(result)
			})
			.catch(error => console.log("error", error))

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
			<img
				id="none"
				src={Logo}
				alt="profile"
				width="170"
				height={100}
			></img>
			<Form className="form">
				<FormGroup className="search-wrap">
					{/* isInvalid={loginError} */}
					<Label for="staff-id">Staff Id</Label>
					<Input
						id="staff-id"
						value={state.username}
						onChange={handleState}
						type="text"
						name="username"
						placeholder="Enter Staff Id"
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="staff-password">Password</Label>
					<Input
						id="staff-password"
						type="password"
						value={state.password}
						onChange={handleState}
						name="password"
						placeholder="********"
					/>
				</FormGroup>
				<Button onClick={handlePress}>Login</Button>
				<Signup />
			</Form>
		</div>
	)
}

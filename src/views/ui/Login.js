import React, { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import Logo from "../../assets/images/logos/logo12.jpg"
 import { useNavigate } from "react-router-dom"
import Signup from "./Signup"
import md5 from "md5";
import ForgetPassword from "./ForgetPassword"

// import Axios from "axios";

export default function Login() {
	 const navigate = useNavigate()
	const [state, setState] = useState({
		username: "",
		password: ""
	})


	const handleState = e => {
		const { name, value } = e.target
		setState({ ...state, [name]: value.trim() })
	}

	const handlePress = e => {
		e.preventDefault()
		var myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		var raw = JSON.stringify({
			username: state.username,
			password: md5(state.password)
		})
           
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		}
                  
		 try {
			 fetch("http://localhost:5000/api/v1/users/login/", requestOptions)
				.then(response => response.json())
				.then(result => {
					/**
					 *further processes may come in
					 */
					if(result.code == 200){
						localStorage.setItem("userObject",JSON.stringify(result.data))
					  navigate("/issues");
					}
					console.log(result)
					// result && result.code === 200 ? navigate("/issues") : null
				})
				.catch(error => console.log("error", error))
		} catch (error) {
			console.log("error", error)
		}
	}
	

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
					<Label for="staff-id">Staff Id</Label>
					<Input
						id="staff-id"
						value={state.username}
						onChange={handleState}
						type="text"
						name="username"
						placeholder="Enter Staff ID"
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
			       <br/>
				<ForgetPassword/>
				<Signup/>
			</Form>
		</div>
	)
}

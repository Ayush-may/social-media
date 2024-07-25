import loginImage from '/image/loginImage.jpg';
import signupimage from "/image/signupimg2.jpg";
import {
	LoginContainer, LoginContent, LoginArea, LoginImageContainer, Form, FormGroup, ButtonSignIn
} from "./StyleComponent.jsx";
import {Link} from "react-router-dom";
import {CiLogin} from "react-icons/ci";
import {useState, useEfect, useEffect} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import {useForm} from "react-hook-form";

function SwitchComponent({type, setType}) {
	function handler() {
		switch (type) {
			case "LOGIN":
				return <LoginComponent setType={setType}/>
			case "FORGET_PASSWORD":
				return <h1>Forget password</h1>
			case "SIGN_UP":
				return <SignUpComponent setType={setType}/>
			default:
				return <h1>No components</h1>
				break;
		}
	}

	return (
		<>
			{handler()}
		</>
	)
}

// main component
function Login() {
	const [type, setType] = useState("LOGIN");

	return (<>
		<Navbar/>
		<LoginContainer className={"pattern-dots-md"}>
			<LoginContent>
				<SwitchComponent type={type} setType={setType}/>
			</LoginContent>
		</LoginContainer>
	</>)
}

export default Login;

/*
Other components
 */

function LinkCenter({setType, text, type}) {
	return (<div className={"w-100 text-center mt-2"}>
		<p
			style={{
				textDecoration: "none",
				fontWeight: "200",
				cursor: "pointer"
			}}
			onClick={() => setType(type + "")}
		>
			{text}
		</p>
	</div>)
}

function SignUpComponent({setType}) {
	const {
		register,
		handleSubmit,
		setError,
		formState: {errors}
	} = useForm();

	function onSubmit(data) {
		// 	handle submition here
	}

	/*

	TODO:WORK HERE

	function validateUsername(event) {
		const usernamePattern = /^[A-Z][a-z]*[0-9]+$/;
		if (!usernamePattern.test(event.target.value)) {
			setError("user", {
				type: "manual",
				message: "This is working "
			})
		} else {
			setErrors("user", {type: "manual", message: ""});
		}
	}
	*/


	return (
		<>
			<LoginArea>
				<h1>Sign up</h1>
				<Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
					<FormGroup>
						<input
							type={"text"}
							name={"fullName"}
							placeholder={"Full name"}
							{...register("fullname", {
								required: "Full name is required"
							})}
							onKeyUp={validateUsername}
						/>
					</FormGroup>
					<FormGroup>
						<input
							type={"text"}
							name={"user"}
							placeholder={"user"}
							autoComplete={"off"}
							{...register("user", {
								required: "Username is required",
								// minLength: {
								// 	value: 5,
								// 	message: "username must be at least 5 characters long"
								// },
								pattern: {
									value: /^[A-Z]([a-z]+)([\@\_]+){1}([0-9]+){1,}$/,
									message: "The username must start with a capital letter, followed by lowercase letters, and include at least one number"
								}
							})}
						/>
						{errors.user && <small className={"text-danger"}>{errors.user.message}</small>}
					</FormGroup>
					<FormGroup>
						<input type={"text"} name={"email"} placeholder={"Email"}/>
					</FormGroup>
					<FormGroup>
						<input type={"text"} name={"fullName"} placeholder={"password"}/>
					</FormGroup>
					<FormGroup>
						<input type={"password"} name={"passsword"} placeholder={"confirm password"}/>
					</FormGroup>
					<FormGroup>
						<ButtonSignIn type={"submit"}>
							create new account
						</ButtonSignIn>
					</FormGroup>
				</Form>
				<LinkCenter setType={setType} text={"Already have a account ?"} type={"LOGIN"}/>
			</LoginArea>

			<LoginImageContainer>
				<div>
					<h1>
						Sign up
					</h1>
					<img src={signupimage}/>
				</div>
			</LoginImageContainer>
		</>
	)
}

function LoginComponent({setType}) {
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm();

	function onSubmit(data) {
		// 	handle submition here
	}

	return (
		<>
			<LoginArea>
				<h1>Login</h1>
				<Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
					<FormGroup>
						<input
							type={"text"}
							name={"username"}
							placeholder={"username"}
							autoComplete={"off"}
							{...register("username", {
								required: "username is required",
								minLength: {
									value: 5,
									message: "username must be at least 5 characters long"
								}
							})}/>
						{errors.username && <small className={"text-danger"}>{errors.username.message}</small>}
					</FormGroup>
					<FormGroup>
						<input type={"password"} name={"passsword"} placeholder={"password"} {...register("password")}/>
					</FormGroup>
					<FormGroup>
						<p
							onClick={() => setType(() => "FORGET_PASSWORD")}
							style={{
								textDecoration: "none",
								fontWeight: "200",
								margin: "-0.5rem 0",
								cursor: "pointer"
							}}>
							forget passwords
						</p>
					</FormGroup>
					<FormGroup>
						<ButtonSignIn>
							Sign in
							{/*<CiLogin size={"1.4em"} className={"me-2"}/>*/}
						</ButtonSignIn>
					</FormGroup>
				</Form>
				<LinkCenter setType={setType} text={"create a new account"} type={"SIGN_UP"}/>
			</LoginArea>

			<LoginImageContainer>
				<div>
					<h1>
						{/*Welcome back!*/}
						Sign in
					</h1>
					<img src={loginImage}/>
					{/*<img src={signupimage}/>*/}
				</div>
			</LoginImageContainer>
		</>
	)
}
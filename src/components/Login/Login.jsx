import loginImage from '/image/loginImage.jpg';
import signupimage from "/image/signupimg2.jpg";
import {
	LoginContainer, LoginContent, LoginArea, LoginImageContainer, Form, FormGroup, ButtonSignIn
} from "./StyleComponent.jsx";
import {Link} from "react-router-dom";
import {CiLogin} from "react-icons/ci";
import {useState} from "react";

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
		<LoginContainer>
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
	return (
		<>
			<LoginArea>
				<h1>Sign up</h1>
				<Form>
					<FormGroup>
						<input type={"text"} name={"fullName"} placeholder={"Full name"}/>
					</FormGroup>
					<FormGroup>
						<input type={"text"} name={"email"} placeholder={"username"}/>
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
						<ButtonSignIn>
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
	return (
		<>
			<LoginArea>
				<h1>Login</h1>
				<Form>
					<FormGroup>
						<input type={"text"} name={"username"} placeholder={"username"}/>
					</FormGroup>
					<FormGroup>
						<input type={"password"} name={"passsword"} placeholder={"password"}/>
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
import {
	HomeContainer,
	HomeContent,
	TypeWriterContainer,
} from "./HomeCompo.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TypewriterComponent from "typewriter-effect";
import {ButtonSignIn} from "../../components/Login/StyleComponent.jsx";
import image1 from "/image/236245221_11079903.jpeg"

export default function Home() {
	return (
		<>
			<HomeContainer className={"pattern-dots-md text-dark"}>
				<Navbar/>
				<HomeContent>
					<TypeWriterContainer>
						<h1>
							<TypewriterComponent
								options={{
									strings: ["SocialMedia.", 'A chat app !'],
									autoStart: true,
									loop: true
								}}
							/>
						</h1>
					</TypeWriterContainer>
					<ButtonSignIn>Sign in</ButtonSignIn>
				</HomeContent>
			</HomeContainer>
		</>
	)
}
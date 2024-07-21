import {HomeContainer} from "./HomeCompo.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
	return (
		<>
			<HomeContainer className={"pattern-dots-md text-dark"}>
				<Navbar/>

				<TypewriterComponent
					options={{
						strings: ["SocialMedia."],
						autoStart: true,
						loop: true,
						// delay: "1000ms",
						// deleteSpeed: "300ms",

					}}
				/>
			</HomeContainer>
		</>
	)
}
import {HomeContainer} from "./HomeCompo.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Home() {
	return (
		<>
			<HomeContainer className={"pattern-dots-md text-dark"}>
				<Navbar/>
			</HomeContainer>
		</>
	)
}
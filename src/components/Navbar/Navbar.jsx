import {
	NavbarContainer,
	NavbarLogo,
	NavbarItemContainer,
	NavLinkGroup,
} from "./NavbarCss.jsx"
import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<NavbarContainer>
				<NavbarLogo>
					<h1>
						<Link to={"/"}>SocialMedia.</Link>
					</h1>
				</NavbarLogo>
				<NavbarItemContainer>
					<NavLinkGroup>
						<NavLink
							to={"/"}
							className={({isActive}) => isActive ? "text-danger bottomBorder" : "text-dark"}>
							Home
						</NavLink>
						<NavLink to={"/about_us"} className={({isActive}) => isActive ? "text-danger" : "text-dark"}>
							About us
						</NavLink>
						<NavLink to={"/contact_us"} className={({isActive}) => isActive ? "text-danger" : "text-dark"}>
							Contact us
						</NavLink>
						<NavLink to={"/github_page"} className={({isActive}) => isActive ? "text-danger" : "text-dark"}>
							Github Page
						</NavLink>
					</NavLinkGroup>
					<NavLink to={"/login"}
					         className={({isActive}) => isActive ? "login loginActive" : "login"}>Login</NavLink>
				</NavbarItemContainer>


			</NavbarContainer>
		</>
	)
}
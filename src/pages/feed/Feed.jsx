import {
	FeedNav,
	FeedNavItem,
	FeedContainer,
	FeedLowerContainer, FeedSideProfile, FeedCard, FeedCardImage, FeedContent, FeedChatHistory, FeedPost,
} from "./FeedCompo.jsx";
import {MdChatBubble} from "react-icons/md";
import {MdHome} from "react-icons/md";
import {MdSettings} from "react-icons/md";

export default function Feed() {
	return (
		<>
			<FeedContainer>
				<FeedNav>
					<FeedNavItem><MdHome size={"1.8em"}/></FeedNavItem>
					<FeedNavItem><MdChatBubble size={"1.8em"}/></FeedNavItem>
					<FeedNavItem><MdSettings size={"1.8em"}/></FeedNavItem>
					<FeedNavItem className={"ms-auto"}>
						Log out
					</FeedNavItem>
				</FeedNav>

				<FeedLowerContainer>
					<FeedSideProfile>
						<FeedCard>
							<FeedCardImage>
								<img src={""}/>
							</FeedCardImage>
							<p className={"name"}>Ayush Sharma</p>
							<p className={"caption"}>Caption</p>
							<p className={"state"}>Bihar</p>
						</FeedCard>
					</FeedSideProfile>

					{/*all post and other things */}
					<FeedContent>

						{/*This is text post*/}
						<FeedPost>
							<div className={"feedpost_profile"}>
								<div className={"feedpost_image"}>
									<image src={""}/>
								</div>
								<div>Ayushmay</div>
							</div>
							<p>This is my thought that doing frontend is more harder than doing backend becoz u need to
								maintain all the things !</p>
						</FeedPost>

						{/*This is image post*/}
						<FeedPost>
							<div className={"feedpost_profile"}>
								<div className={"feedpost_image"}>
									<image src={""}/>
								</div>
								<div>Ayushmay</div>
							</div>

							<img className={"post_image"}
							     src={"https://images.unsplash.com/photo-1724279797190-8371a9939494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
							     alt={"image"}/>
						</FeedPost>

					</FeedContent>

					{/*Chat with frnds */}
					<FeedChatHistory>
						<p className={"header"}>Chat with friends !</p>
						<div>
							<p className={"text-secondary text-center text-lowercase"}>Add frnds to chat</p>
						</div>
					</FeedChatHistory>

				</FeedLowerContainer>
			</FeedContainer>
		</>
	)

}


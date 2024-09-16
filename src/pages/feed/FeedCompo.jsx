import {styled} from "styled-components";

const color = {
	back: "#18191A",
	card: "#252c2c",
	caption: "#8b9797",
	state: "#8b9797",
	posttext: "#d6d6d6",
}

const FeedContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background: ${color.back};
    display: flex;
    flex-direction: column;
`

const FeedNav = styled.nav`
    padding: 1rem 10rem 1rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242526;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
`;

const FeedNavItem = styled.a`
    padding: 0 1rem;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #d1f1ff;
    }
`;

const FeedLowerContainer = styled.div`
    width: 100%;
    //min-height: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 10rem 0 10rem;
    margin: 0 auto;
    margin-top: 60px;

`

const FeedSideProfile = styled.div`
    height: 100%;
    width: 250px;
    position: sticky;
    top: 75px;
`
const FeedCard = styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    background: ${color.card};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    overflow: hidden;

    & p {
        margin: 0;
        padding: 0;
    }

    & > .name {
        margin-top: 5px;
        color: white;
    }

    & > .caption {
        color: ${color.caption};
        font-size: 0.8rem;
    }

    & > .state {
        color: ${color.caption};
        font-size: 0.8rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 65px;
        background: burlywood;
        z-index: 0;
    }
`

const FeedCardImage = styled.div`
    width: 80px;
    height: 80px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 999px;
    //margin: 0 auto;
    background: white;
    z-index: 2;

    & > img {
        width: 100%;
        border: 1px solid white;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const FeedContent = styled.div`
    //width: 1000px;
    flex: 1;
    height: 4000px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const FeedChatHistory = styled.div`
    //max-height: calc(100vh - 100px);
    height: fit-content;
    width: 300px;
    border-radius: 20px;
    overflow: hidden;
    background: ${color.card};
    padding-top: 20px;
    position: sticky;
    top: 75px;

    & > .header {
        color: white;
        text-transform: capitalize;
        text-align: center;
    }
`

const FeedPost = styled.div`
    width: 100%;
    max-height: 500px;
    border-radius: 10px;
    //background: #d6d6d6;
    background: ${color.card};
    overflow: hidden;

    & p {
        padding-left: 1rem;
        color: ${color.posttext};
    }


    & .feedpost_profile {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem 0 1rem 1rem;
        color: white;
    }

    & .feedpost_image {
        width: 50px;
        height: 50px;
        overflow: hidden;
        background: white;
        border-radius: 999px;
    }

    .post_image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

export {
	FeedNav,
	FeedNavItem,
	FeedContainer,
	FeedLowerContainer,
	FeedSideProfile,
	FeedCard,
	FeedCardImage,
	FeedContent,
	FeedChatHistory,
	FeedPost
};
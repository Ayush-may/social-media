import styled from "styled-components";
import {media, minMedia} from "../../utils/breakDownSize.js"


const HomeContainer = styled.main`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
`

const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 120px 3rem;

    & > button {
        width: fit-content;
        padding: 1rem 2rem;
        font-size: 1rem;
        margin-top: 250px;
    }
`

const TypeWriterContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);

    h1 {
        font-weight: 800;
        text-align: center;
        text-wrap: nowrap;
        color: black;

        ${media.sm} {
            font-size: 2rem;
        }

        ${minMedia.sm} {
            font-size: 4.5rem;
        }

        ${minMedia.md} {
            font-size: 5rem;
        }

        ${minMedia.lg} {
            font-size: 8rem;
        }

        ${minMedia.xl} {
            font-size: 13rem;
        }
    }
`

export {
	HomeContainer,
	HomeContent,
	TypeWriterContainer
}
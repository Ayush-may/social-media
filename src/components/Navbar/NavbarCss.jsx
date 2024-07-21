import styled from "styled-components";
import {media} from "../../utils/breakDownSize.js";

const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 90px;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 10px rgba(0 0 0 /0.2);
    user-select: none;

    ${media.md} {
        padding: 1rem 1rem
    }
`

const NavbarLogo = styled.div`
    user-select: none;
    h1 {
        font-weight: bold;
        padding: 0;
        margin: 0;
    }
`

const NavbarItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0 10px;

        &.login {
            color: white;
            background: black;
            padding: 10px 1.5rem;
        }

        &.loginActive {
            color: black;
            background: white;
            outline: 1px solid;
            border-bottom: 3px solid;
        }

        &::selection {
            color: orange;
        }

        &::-moz-selection {
            color: red;
        }

    }

    .bottomBorder {
        border-bottom: 2px solid black;
    }

    ${media.xl} {
        gap: 1.5rem;
    }

    ${media.lg} {
        display: none;
    }
`
export {
	NavbarContainer,
	NavbarLogo,
	NavbarItemContainer,
}
import styled from "styled-components";

const color = "#46778C";
const inputFieldColor = "#8CC6D4";
import {media} from "../../utils/breakDownSize.js"

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`

const LoginContent = styled.div`
    // 1000px
    max-width: 75rem;
    // 600px
    height: auto;
    //height: 27.5rem;
    display: flex;
    outline: 1px solid;

    ${media.sm} {
        width: 100%;
        //outline: ;
    }

    ${media.md} {
        width: auto;
    }

    ${media.lg} {
		
    }
`

const LoginImageContainer = styled.div`
    min-height: 100%;
    width: 100%;
    overflow: hidden;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
            position: absolute;
            inset: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        h1 {
            display: flex;
            gap: 10px;
            font-size: 8rem;
            font-weight: 700;
            color: black;
            text-wrap: wrap;
            padding: 0 2rem;
            text-transform: capitalize;
        }
    }

    ${media.sm} {
        display: none;

        div {
            img {
                display: none;
            }

            h1 {
                display: none;
            }
        }
    }

    ${media.md} {
        width: 10rem;

        div {
            h1 {
                display: none;
                font-size: 4rem;
                font-weight: 300;
            }
        }
    }


    ${media.lg} {
        width: 20rem;

        div {
            width: 100%;

            h1 {
                display: none;
                font-size: 6rem;
                font-weight: 500;
            }
        }
    }
`

const LoginArea = styled.div`
    width: 45rem;
    height: 100%;
    padding: 2rem;
    //color: #8DC6D6;
    color: ${color};

    h1 {
        color: black;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        width: 100%;
    }

    ${media.lg} {
        width: 30rem;
    }

    ${media.md} {
        width: 20rem;
    }

    ${media.sm} {
        width: 100%;
        padding: 0;

        p {
            font-size: 0.8rem;
        }
    }
`
const Form = styled.form`
    //margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    ${media.sm} {
        padding: 0 10px;
        font-size: 0.8rem;
        width: 100%;

        input {
            height: 20px;
            font-size: 0.8rem;
        }

        p {
            font-size: 0.8rem;
        }
    }

    p {
        color: #455058;
    }

    input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 0.9rem;
        border: 1px solid ${inputFieldColor};
        outline: none;
        color: #455058;
    }
`

const ButtonSignIn = styled.button`
    width: 100%;
    outline: none;
    padding: 10px;
        //border: 1px solid ${inputFieldColor};
    border: none;
    background-color: black;
    color: white;
`

export {
	LoginContainer,
	LoginContent,
	LoginArea,
	LoginImageContainer,
	Form,
	FormGroup,
	ButtonSignIn
};
import styled, { css } from 'styled-components'
// import { device } from './devices'
import { color } from '../colors'

const StyledConnect = styled.div`
    background: ${color.SHADE_DARK};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before{
        content: '';
        display: block;
        width: 100vw;
        height: 4em;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %2329282A;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %23fff;'%3E%3C/path%3E%3C/svg%3E");
    }
`

const ConnectHeading = styled.h2`
    font-size: 2em;
    font-weight: 200;
    letter-spacing: 0.8em;
    text-align: center;
    text-transform: uppercase;
    color: ${color.SHADE_LIGHT};
    position: relative;
    padding-bottom: 0.5em;
    padding-left: 0.5em;
    margin-top: 2em;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 40%;
        background: ${color.MAIN_BRAND};
        height: 0.08em;
        width: 3em;
    }
`

const ConnectFormContainer = styled.div`
    margin: 2em;
    color: ${color.SHADE_LIGHT};
    max-width: 66em;
`

const ConnectForm = styled.form`
    /* padding: 1em; */
    display: flex;
    flex-direction: column;
    /* border: 2px solid pink; */
    width: 50vw;
    max-width: 40em;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
`

const ConnectFormLabel = styled.label`
    letter-spacing: 0.7em;
    font-size: 0.6em;
    padding-left: 0.5em;
`

const ConnectFormInput = styled.input`
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 0.5em;
    border: none;

    :focus{
        outline: none;
    }

    ${props => props.button && css`
        background: transparent;
        border-radius: 1em;
        border: 0.1em solid ${color.MAIN_BRAND};
        color: white;
        margin: 0;
        width: 50%;
        align-self: center;
        padding: 0.25em 1em;
        box-shadow: ${color.SHADOWTWO};
    
        &:active{
            box-shadow: ${color.SHADOWTWO} inset;
        }
        
        background: ${color.MAIN_BRAND};
        color: ${color.SHADE_DARK};
    `}
`

const ConnectFormMessageBox = styled.textarea`
	height: 10vh;
    resize: none;
    margin-bottom: 3em;
    border-radius: 0.5em;
    padding: 0.5em;

    :focus {
        outline: none;
    }
`


const ErrorMessage = styled.span`
    color: red;
    letter-spacing: 0;
`

export {
	StyledConnect,
	ConnectHeading,
	ConnectFormContainer,
	ConnectForm,
	ErrorMessage,
	ConnectFormLabel,
	ConnectFormInput,
	ConnectFormMessageBox
}
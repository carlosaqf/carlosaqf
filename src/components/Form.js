import styled from 'styled-components'


const Form = styled.div`
    width: 70%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    background: #FFF;
    
    label{
        align-self: flex-start;
        color: rgba(0,0,0,1)
    }

    input{
        margin-bottom: 2em;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        background: transparent;

        :focus {
            outline: none;
        }
    }

    textarea{
        resize: none;
    }

    @media ${device.mobileS}{
        width: 80vw;
    }

    @media ${device.laptop}{
        width: 50vw;
    }
`;

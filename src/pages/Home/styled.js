import styled from 'styled-components';

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;


export const Content = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    width: 300px;
    height: 33px;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none:
    }
`;

export const Button = styled.button`
    height: 35px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`;

export const ErroMsg = styled.span`
    font-family: sans-serif;
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600px;
    margin-top: 1rem;
`;


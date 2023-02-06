import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height:700px;
    padding:20px 0;
    background:url('/images/11.jpg');
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`;

const LargeHeading = styled.h1`
    font-size:4rem;
    line-height:85px;
    color:white;
    font-family: 'Unbounded', cursive;
`;

const Input = styled.input`
    width:70%;
    background:transparent;
    border:none;
    border-bottom:1px solid white;
    padding:10px;
    color:white;
    letter-spacing:2px;
    font-size:1.2rem;
    &:focus
    {
        outline:none;
    }

`;


const Button = styled.button`
    border:1px solid #084db4;
    margin:10px 0;
    padding:15px;
    background:transparent;
    color:white;
    box-shadow:0 0 3px #084db4;
    font-family: 'Unbounded', cursive;
    letter-spacing:6px;
    word-spacing:4px;
    transition:.2s ease;
    cursor:pointer;
    border-radius:2px;
    &:hover
    {
        background:white;
        color:#084db4;
        box-shadow:0 0 10px white;
        border:1px solid transparent;
    }
`;



const Newsletter = () => {
  return (
    <Container>
        <LargeHeading>Newsletter</LargeHeading>        
        <Input type="text" placeholder="Email Address"/>
        <Button>SUBSCRIBE</Button>
    </Container>
  )
}

export default Newsletter

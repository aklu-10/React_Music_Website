import styled from 'styled-components';
import { css } from "styled-components";
import {tablet } from './responsiveCss';


const Container = styled.div`
    min-height:100vh;
    padding:20px 0;
    position:relative;
`;

const CoverImage = styled.img`
    width:100vw;
    height:100%;
    position:absolute;
    top:0;
    z-index:-1;
    object-fit:cover;

`;


const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,1fr);
    padding:50px;

    ${tablet(css`
        display:block;
        padding:20px;
    `)}

`;

const Main = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;  
    flex-direction:column;
    grid-row-start: 1;
    grid-row-end: 4;
`;


const LargeHeading = styled.h1`
    font-size:4rem;
    line-height:85px;
    color:white;
    margin:20px;
    font-family: 'Unbounded', cursive;
    ${tablet(css`
    padding:20px;
`)}

`;

const Box = styled.div`
    cursor:pointer;
    border:1px solid white;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    color:white;
    ${props=>
    {
        switch(props.pos)
        {
            case '2':
                return "grid-row-start:2;background:#084db4;color:white;border:1px solid white;"
            case '3':
                return "grid-row-start:2;"
            case '4':
                return "grid-row-start:3;grid-column-start:3;"
            default:
                return;
        }
    }}
    &:hover
    {
        background:white;
        color:#084db4;
        box-shadow:0 0 10px white;
        border:1px solid transparent;
    }
`;

const Caption = styled.p`
    padding:20px;
`;
const Title = styled.h4`
    padding:5px 20px;
`;
const Para = styled.p`
    padding:20px;
    line-height:22px;
    `;

const LinkSection = () => {
  return (
    <Container>
        <CoverImage src="/images/1.jpg"></CoverImage>
        <Wrapper>   
            <Main>
                <LargeHeading>LINK</LargeHeading>
            </Main>
            <Box pos="1">
                <Caption>02-12-23 AT 15:00</Caption>
                <Title>Englise Saint Francise</Title>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic at. Perferendis iusto, laboriosam maiores.</Para>
            </Box>
            <Box pos="2">
                <Caption>02-12-23 AT 15:00</Caption>
                <Title>Englise Saint Francise</Title>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic at. Perferendis iusto, laboriosam maiores.</Para>
            </Box>
            <Box pos="3">
                <Caption>02-12-23 AT 15:00</Caption>
                <Title>Englise Saint Francise</Title>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic at. Perferendis iusto, laboriosam maiores.</Para>
            </Box>
            <Box pos="4">
                <Caption>02-12-23 AT 15:00</Caption>
                <Title>Englise Saint Francise</Title>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic at. Perferendis iusto, laboriosam maiores.</Para>
            </Box>
        </Wrapper>
    </Container>
  )
}

export default LinkSection

import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { desktop } from './responsiveCss';

const Container = styled.div`
    min-height:100vh;
    padding:20px 0;
    min-width:100vw;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    background:url('/images/7.jpg');
    background-size:cover;
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    padding:0 10%;
    ${desktop(css`
        margin:auto;
    `)}
`;

const Caption = styled.h4`
    letter-spacing:4px;
    font-size:1.2rem;
    color:rgba(10,60,200,0.8);
`;

const Heading = styled.h1`
    font-size:3.2rem;
    word-spacing:10px;
    letter-spacing:3px;
    margin:8px 0;
    color:white;
    font-family: 'Unbounded', cursive;
    ${desktop(css`
        font-size:2.4rem;
    `)}
`;

const Para = styled.p`
    position:relative;
    bottom:0;
    left:0;
    max-width:440px;
    line-height:40px;
    color:lightgray;
    word-break:break-all;
    
    
    ${desktop(css`
        width:70%;
    `)}

    
`;

const AboutSection = () => {
  return (
    <Container>
        <Wrapper>
        <Caption>
            THE STORY
        </Caption>
            <Heading>A COMPUTER 
            </Heading>
            <Heading>
            SCIENTIST USING
            </Heading>
            <Heading>
            AI TO PRODUCE 
            </Heading>
            <Heading>
            MUSIC</Heading>

            <Para>
                I have always been curious about music production but have never had any musical inclinations or skills. Using AI, I was able to learn about music production through the lens of technology. SPLY85 is a machine learning based AI using neural networks that helps to generate music on its own. The AI digests popular songs and then uses open-source beats, lyricsm sounds to produce music without infringing on copyrights.
            </Para>
        </Wrapper>

    </Container>
  )
}

export default AboutSection

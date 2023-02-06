import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { desktop, tablet } from './responsiveCss';

const Container = styled.div`
    min-height:100vh;
    padding:20px 0;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    background:url('/images/7.jpg');
    background-size:cover;
`;

const Wrapper = styled.div`
    display:flex;
    margin-left:10%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    ${desktop(css`
        margin:auto;
    `)}

    ${tablet(css`
        margin-left:0%;
        margin:0 auto;
    `)}
`;

const Caption = styled.h4`
    letter-spacing:4px;
    font-size:1.2rem;
    color:white;
    align-self:flex-start;
`;


const Heading = styled.h1`
    width:50vw;
    font-size:3.2rem;
    word-spacing:10px;
    letter-spacing:5px;
    margin:8px 0;
    color:white;
    font-family: 'Unbounded', cursive;
    ${desktop(css`
        font-size:2.4rem;
    `)}

    ${tablet(css`
        width:90vw;
    `)}
    
`;

const Para = styled.p`
    position:relative;
    bottom:0;
    left:0;
    width:50vw;
    line-height:40px;
    color:lightgray;
    word-break:break-all;

    ${tablet(css`
        width:90vw;
    `)}
    
`;

const AboutSection = () => {
  return (
    <Container>
        <Wrapper>
            <Caption>
                THE STORY
            </Caption>
            <Heading>A COMPUTER SCIENTIST USING AI TO PRODUCE MUSIC
            </Heading>

            <Para>
                I have always been curious about music production but have never had any musical inclinations or skills. Using AI, I was able to learn about music production through the lens of technology. SPLY85 is a machine learning based AI using neural networks that helps to generate music on its own. The AI digests popular songs and then uses open-source beats, lyricsm sounds to produce music without infringing on copyrights.
            </Para>
        </Wrapper>

    </Container>
  )
}

export default AboutSection

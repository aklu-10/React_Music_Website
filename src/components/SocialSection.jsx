import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { css } from "styled-components";
import { desktop } from './responsiveCss';

const Container = styled.div`
    min-height:100vh;
    padding:20px 0;

`;

const Wrapper = styled.div`
    min-height:100vh;
`;

const TextContainer = styled.div`
    padding:6% 0;
`;


const Main = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 15%;
    ${desktop(css`
        justify-content:center;
        align-items:center;
        flex-direction:column-reverse;
    `)}
`;

const LargeHeading = styled.h1`
    color:#084db4;
    font-size:4rem;
    font-family: 'Unbounded', cursive;
`;

const SmallHeading = styled.h2`
    font-size:2rem;
    letter-spacing:8px;
    font-family: 'Unbounded', cursive;
    padding-left:15%;
`;



const SocialLinks = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    position:relative;
    bottom:20px;
`;

const Link = styled.a`
    font-size:14px;
    color:#084db4;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:.4s ease;
    cursor:pointer;
    padding:10px;

    &:hover
    {
        color:white;
        background:#084db4;
        transform:rotate(360deg);
    }

    ${desktop(css`
        padding:10px;
    `)}

`;

const Para = styled.p`
    width:400px;
    line-height:20px;
    font-size:.9rem;
    color:gray;
    ${desktop(css`
        display:none;
    `)}
`;

const VideoWrapper = styled.div`
    overflow:hidden;
    margin-top:15%;
`;

const VideoContainer = styled.div`
    display:flex;
    width:100vw;
    overflow-x:auto;
`;

const VideoItem = styled.div`
    position:relative;
`;

const Video = styled.video`
    width:600px;
    height:300px;
    margin:10px;
    ${desktop(css`
        width:350px;
    `)}
`;

const SocialSection = () => {

    const videos = [
        
        {
            id:1,
            title:'guitar',
            src:"/videos/1.mp4",
        },
        {
            id:2,
            title:'band',
            src:"/videos/2.mp4",
        },
        {
            id:3,
            title:'solo',
            src:"/videos/3.mp4",
        },
        {
            id:4,
            title:'solo',
            src:"/videos/4.mp4",
        },
    ]

  return (
    <Container>
        <Wrapper>
            <TextContainer>
                <Main>
                    <LargeHeading>SOCIAL</LargeHeading>
                    <SocialLinks>
                        <Link>
                            <TwitterIcon/>
                        </Link>
                        <Link>
                            <FacebookIcon/>
                        </Link>
                        <Link>
                            <YouTubeIcon/>
                        </Link>
                    </SocialLinks>
                </Main>
                <Main>
                    <SmallHeading>
                        MEDIA
                    </SmallHeading>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni magnam et nesciunt ad? Suscipit, accusantium?</Para>
                </Main>
            </TextContainer>

            <VideoWrapper>


                <VideoContainer>

                    {   videos.map(video=>(
                                <VideoItem key={video.id}>
                                    <Video src={video.src} controls></Video>
                                </VideoItem>

                    ))}
                    
                </VideoContainer>
                
            </VideoWrapper>
        </Wrapper>
    </Container>
  )
}

export default SocialSection

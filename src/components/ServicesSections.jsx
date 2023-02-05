import styled from 'styled-components';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BuildIcon from '@mui/icons-material/Build';

const Container = styled.div`
    background:url('/images/8.jpg');
    background-size:cover;

`;
    
const Wrapper = styled.div`
    padding:20px 0;
    width:100vw;
    background:linear-gradient(90deg,rgba(0,0,0,.6),black);
`;

const SubWrapper = styled.div`
    margin:0 auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
`;

const Heading = styled.h1`
    font-size:3.2rem;
    word-spacing:10px;
    letter-spacing:3px;
    color:white;
    font-family: 'Unbounded', cursive;
    padding:50px;
    text-align:center;
`;
const Cards = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    min-height:200px;
    height:max-content;
`;

const Card = styled.div`
    cursor:pointer;
    width:250px;
    margin:20px;
    text-align:center;
    padding:5px 10px;
    border:1px solid #084db4;
    box-shadow:0 0 3px #084db4;
    &:hover
    {
        background:white;
        color:#084db4;
        box-shadow:0 0 10px white;
        border:1px solid transparent;
    }

`;


const Icon = styled.div`
    border-radius:100%;
    width:100px;
    height:100px;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Caption = styled.h4`
    font-size:1.2rem;
    color:rgba(10,60,200,0.8);
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Para = styled.p`
    line-height:30px;
    color:lightgray;
`;


const Button = styled.button`

    border:1px solid #084db4;
    box-shadow:0 0 3px #084db4;
    margin:10px 0;
    padding:15px;
    background:transparent;
    color:white;
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



const ServicesSections = () => {
  return (
    <Container>
        <Wrapper>
            <SubWrapper>
                <Heading>HOW IT WORKS</Heading>
                <Cards>
                    <Card>
                        <Icon>
                            <MusicNoteIcon style={{color:'blue',fontSize:'60px'}}/>        
                        </Icon>
                        <Caption>SINGING A SONG</Caption>
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>
                    </Card>
                    <Card>
                        <Icon>
                            <SmartToyIcon style={{color:'blue',fontSize:'60px'}}/>        
                        </Icon>
                        <Caption>USING AI LENS OF TECHNOLOGY</Caption>
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Para>
                    </Card>
                    <Card>
                        <Icon>
                            <BuildIcon style={{color:'blue',fontSize:'60px'}}/>        
                        </Icon>
                        <Caption>HELPS TO GENERATE MUSIC</Caption>
                        <Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi provident.</Para>
                    </Card>
                </Cards>
                <Button>VIEW TOUR DATES</Button>    
            </SubWrapper>
        </Wrapper>
    </Container>
  )
}

export default ServicesSections

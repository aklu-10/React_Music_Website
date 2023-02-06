import styled from 'styled-components';

const Container = styled.div`
    background-image:url('/images/2.jpg');
    background-size:cover;
    min-height:720px;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:0 16%;
`;

const LargeHeading = styled.h1`
    font-size:5.5rem;
    line-height:85px;
    color:white;
    font-family: 'Unbounded', cursive;
`;

const SmallHeading = styled.h2`
    color:white;
    letter-spacing:8px;
    font-weight:100;
    font-family: 'Unbounded', cursive;
    margin:14px 0;
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



const HeroSection = () => {
  return (
    <Container>
    <LargeHeading>
            SPLY95
        </LargeHeading>
        <SmallHeading>
            AI ENTHUSIASTS
        </SmallHeading>
        <Button>
            VIEW YOUR DATES
        </Button>

    </Container>
  )
}

export default HeroSection

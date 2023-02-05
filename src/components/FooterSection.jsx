import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

    background:#084db4;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;

`;

const FooterSection = () => {
  return (
    <Container>
        Akash Kumar | 2023 - 24
    </Container>
  )
}

export default FooterSection
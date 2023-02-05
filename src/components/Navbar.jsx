import { useState } from 'react';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SortIcon from '@mui/icons-material/Sort';
import { css } from "styled-components";
import { desktop } from './responsiveCss';


const Container = styled.header`
    position:fixed;
    top:0;
    z-index:5;
    width:100vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:15px 30px;
    background:#084db4;
`;

const Navigation = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    ${desktop(css`
        ${props=>props.type!=='mobile'?'display:none':'display:flex'}
    `)}
`;

const Logo = styled.a`
    color:white;
    padding:10px 20px;
    font-size:2rem;
`;

const Link = styled.a`
    padding:10px 15px;
    font-size:14px;
    color:white;
    cursor:pointer;
    transition:.1s ease;
    &:hover
    {
        transform:scale(1.1);
    }

`;

const SocialLinks = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    ${desktop(css`
        ${props=>props.type!=='mobile'?'display:none':'display:flex'}
    `)}
`;

const Text = styled.p`
    color:white;

`;

const MobileNavigation = styled.nav`
    position:absolute;
    top:70px;
    padding:20px;
    background:#084db4;
    width:100vw;
    display:none;
    
    ${desktop(css`
        display:block;
    `)}
`;

const Menubar = styled.nav`
    
    display:none;

    ${desktop(css`
        display:block;
    `)}
`;
const Navbar = () => {

    let [openMenu,setOpenMenu]=useState(false);

  return (

    <Container>

            <Logo>SPLY85</Logo>
        <Navigation>
            <Link>ABOUT</Link>
            <Link>HOW IT WORKS</Link>
            <Link>SOCIAL MEDIA</Link>
            <Link>LINKS</Link>
        </Navigation>
        
        <SocialLinks>
            <Text>Follow us:</Text>
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

    {   
        openMenu ?

        <MobileNavigation>
            
            <Navigation type="mobile">
                <Link>ABOUT</Link>
                <Link>HOW IT WORKS</Link>
                <Link>SOCIAL MEDIA</Link>
                <Link>LINKS</Link>
            </Navigation>
            
            <SocialLinks type="mobile">
                <Text>Follow us:</Text>
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

        </MobileNavigation>
        :
            ''
        }

        <Menubar onClick={()=>openMenu?setOpenMenu(false):setOpenMenu(true)}>
            <SortIcon style={{fontSize:'2rem',color:"white"}}/>
        </Menubar>

    </Container>

  )
}

export default Navbar

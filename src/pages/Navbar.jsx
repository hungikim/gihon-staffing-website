import styled from 'styled-components'
import gihonLogo from '../assets/Gihon-logo.png'
export default function Navbar() {
  return (
    <NavbarWrapper>
        <Logo src={gihonLogo}/>

        <Tabs>
            <a href="#Home">Home</a>
            <a href="#JobSeekers">Job Seekers</a>
            <a href="#Employers">Employers</a>
            <a href="#AboutUs">About Us</a>
            <a href="#Contact">Contact</a>
        </Tabs>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background: var(--lighter-color);
    font-size: 1.25em;
    position: sticky;
    font-weight: 500;
`

const Logo = styled.img`
    aspect-ratio: 500 / 125;
    height: 70%;
`

const Tabs = styled.div`
    display: flex;
    gap: 25px;

    a {
        text-decoration: none;
        color: var(--main-color);
    }
`
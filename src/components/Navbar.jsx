import styled from 'styled-components'
import gihonLogo from '../assets/Gihon-logo.png'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleTabClick = () => setIsMobileMenuOpen(false)
  return (
    <NavbarWrapper>
        <Logo src={gihonLogo} onClick={()=>scrollTo(0,0)}/>

        <MobileHamburger onClick={()=>setIsMobileMenuOpen(isMobileMenuOpen? false : true)}>
          {isMobileMenuOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960">
                <path fill="currentColor" d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960">
                <path fill="currentColor" d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
            </svg>
          }
        </MobileHamburger>
        <Tabs style={ isMobileMenuOpen? { display: "flex" } : {}}>
            <a onClick={handleTabClick} href="#Home">Home</a>
            <a onClick={handleTabClick} href="#JobSeekers">Job Seekers</a>
            <a onClick={handleTabClick} href="#Employers">Employers</a>
            <a onClick={handleTabClick} href="#AboutUs">About Us</a>
            <a onClick={handleTabClick} href="#Contact">Contact</a>
        </Tabs>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: var(--desktop-navbar-height);
    background: var(--lighter-color);
    position: sticky;
    top: 0;
    z-index: 2;
    font-weight: 500;
    
    @media (max-width: 768px) {
        height: var(--mobile-navbar-height);
    }
`

const Logo = styled.img`
    aspect-ratio: 500 / 125;
    height: 70%;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 65%;
    }
`

const Tabs = styled.div`
    display: flex;
    gap: 30px;

    a {
        text-decoration: none;
        color: var(--main-color);
    }

    @media (max-width: 768px) {
        display: none;
        padding: 20px 30px;
        right: 0;
        width: fit-content;
        background: var(--lighter-color);
        flex-direction: column;
        position: absolute;
        top: var(--mobile-navbar-height);
        gap: 20px;
    }
`

const MobileHamburger = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
    display: flex;
    align-items: center;
    transition: all 1s ease;

`
import { useSelector } from "react-redux";
import headsetIcon from "../assets/headphone-headset-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";
import documentIcon from "../assets/text-documents-line-icon.svg";
import { CardHeading, CardSection } from "./Pages.styled";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function IndustriesWeServe() {
  const isMobile = useSelector(state=>state.mobile.isMobile)
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [useRef(), useRef(), useRef()]

  useEffect(()=>{
    if (isMobile) {
        slides[0].current.style.display='none';
        slides[1].current.style.display='none';
        slides[2].current.style.display='none';
    
        slides[currentIndex].current.style.display='list-item'
    }
  }, [currentIndex, isMobile])


  const goToLeftSlide = () => setCurrentIndex( (currentIndex-1) % 3 )
  const goToRightSlide = () => setCurrentIndex( (currentIndex+1) % 3 )

  return (
    <CardSection>
      <CardHeading style={{ color: "inherit", marginBottom: "2.5rem" }}>
        Industries We Serve
      </CardHeading>
      <IndustriesWeServeUL>
        <Industries ref={slides[0]}>
          <Industry>
            <IndustryIcon src={headsetIcon} width="60px" height="60px" />
            <IndustryName>Customer Service</IndustryName>
            <IndustryName>Help Desk</IndustryName>
            <IndustryName>Call Center</IndustryName>
            <IndustryName>Office Support</IndustryName>
          </Industry>
        </Industries>

        <Industries ref={slides[1]}>
          <Industry>
            <IndustryIcon src={settingsIcon} width="60px" height="60px" />
            <IndustryName>Warehouse & Distribution</IndustryName>
            <IndustryName>Maintenance Tech</IndustryName>
            <IndustryName>Manufacturing</IndustryName>
            <IndustryName>Sales</IndustryName>
          </Industry>
        </Industries>

        <Industries ref={slides[2]}>
          <Industry>
            <IndustryIcon src={documentIcon} width="60px" height="60px" />
            <IndustryName>Banking</IndustryName>
            <IndustryName>Accounting</IndustryName>
            <IndustryName>Clerical & Administrative</IndustryName>
            <IndustryName>Language Interpretation and Translation</IndustryName>
          </Industry>
        </Industries>
        {isMobile &&
          <>
            <LeftButton onClick={goToLeftSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                    <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/>
                </svg>
            </LeftButton>
            <RightButton onClick={goToRightSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                    <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/>
                </svg>
            </RightButton>
          </>
        }
      </IndustriesWeServeUL>
    </CardSection>
  );
}


const IndustriesWeServeUL = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 50px;

    position: relative;

    @media (min-width: 769px) {
        padding: 0 50px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    /* * { outline: 1px solid black;} */

`

const Industries = styled.li`
    flex: 1 1 0;
`

const Industry = styled.ul`
    list-style-type: disc;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;

    /* outline: 1px solid ; */
`

const IndustryIcon = styled.img`
    margin-bottom: 1rem;

`

const IndustryName = styled.li`
    width: 250px;
`

const Button = styled(Industries)`
    position: absolute;
    /* outline: 1px solid; */
`
const LeftButton = styled(Button)`
    top: 0;
    left: 0;
`

const RightButton = styled(Button)`
    top: 0;
    right: 0;
`
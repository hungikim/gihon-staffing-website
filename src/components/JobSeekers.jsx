import styled from "styled-components"
import { PageHeading, Banner, PageSubHeading, PageWrapper, PageContent, EmploymentImg, Border, CardSection, CardHeading, PageText } from "./Pages.styled"
import employmentImg from '/src/assets/laptop.jpg'
import BNXLogo from '/src/assets/BNX.png'
import GinsengLogo from '/src/assets/Ginseng.png'
import GlovisLogo from '/src/assets/Glovis.png'
import HankookLogo from '/src/assets/Hankook.svg'
import LGLogo from '/src/assets/LG.png'
import NongshimLogo from '/src/assets/Nongshim.png'
import PantosLogo from '/src/assets/Pantos.png'

export default function JobSeekers () {
    return (
        <PageWrapper id='JobSeekers'>
          <Banner>
            <EmploymentImg src={employmentImg} />
            <PageHeading>Job Seekers</PageHeading>
          </Banner>
          <PageContent>
            <PageText>
              <p>
                &emsp;&emsp;At Gihon Networks Corp. we believe in working toegether as a team to ensure an effective working relationship. 
                Whether you are seeking a temporary, contract of permanent position, our qualified recruitment specialists will
                match you with a postion that fits your goals and experience.
              </p>

              <PageSubHeading>Where to Begin</PageSubHeading>
              <ul style={{ listStyleType: '—  '}}>
                <li>Applications are accepted in person only.</li>
                <li>
                    When applying, please ensure that you have two pieces of identification:<br/>
                    <b>Social Insurance Number</b> and a <b>Goverment photo id</b> (ie: driver's license or passport).
                </li>
                <li>If you currently hold a temporary social insurance number (900 series), please bring along your work permit as well.</li>
              </ul>
            
              <PageSubHeading>We provide solutions in several types of employment relationships</PageSubHeading>
              <ul style={{listStyle:"disc"}}>
                <li>Contract-to-Hire</li>
                <li>Long-term & Short-term Projects</li>
                <li>Direct Placement</li>
              </ul>
            
              <PageSubHeading>Submit your resume to begin your job search today!</PageSubHeading>
              <p>
                &emsp;&emsp;Send us your resume to <a href=""><b>gihon.toronto@gmail.com</b></a>.<br/>
                &emsp;&emsp;Once submitted one of our recruiters will contact you to advance with the process.
              </p>
            </PageText>

            <PartnersSection>
              <CardHeading style={{color:'var(--main-color)', textAlign:'center', fontSize:'1.2em', marginBottom:'2.5rem'}}>
                Our Clients & Partners
              </CardHeading>
              <Partners>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={BNXLogo}/>
                  </LogoImgContainer>
                  BNX Shipping Inc.
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={GinsengLogo} style={{ width:'220px', height:'40px' }}/>
                  </LogoImgContainer>
                  Korea Ginseng Corp
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={HankookLogo}/>
                  </LogoImgContainer>
                  Hankook Tire Canada
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={PantosLogo} style={{ width:'200px', height:'70px' }}/>
                  </LogoImgContainer>
                  Pantos Canada
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={NongshimLogo}/>
                  </LogoImgContainer>
                  Nongshim America
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={GlovisLogo} style={{ width:'170px', height:'50px' }}/>
                  </LogoImgContainer>
                  Hyundai Glovis
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={LGLogo} style={{ width:'100px', height:'55px' }}/>
                  </LogoImgContainer>
                  LG Electronics
                </li>
                <li style={{boxShadow:'none', alignSelf:'end'}}>... and more</li>
              </Partners>
            </PartnersSection>

          </PageContent>

        </PageWrapper>
    )
}

const Partners = styled.ul`
  list-style: none;
  font-size: 0.9em;
  font-weight: 500;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    align-items: center;
  }

  @media (min-width: 769px) {
    display: grid;
    gap: 30px 0px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding: 0 5vw;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    li { padding: 10px 0; box-shadow: none;}
  }
`

const LogoImgContainer = styled.div`
  width: 250px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a0b9e6;
`

const LogoImg = styled.img`
  width: 200px;
  height: 50px;
`

const PartnersSection = styled(CardSection)`
  background: inherit;
  color: inherit;
  box-shadow: 2px 2px 10px var(--main-color);
`
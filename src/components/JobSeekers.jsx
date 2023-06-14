import styled from "styled-components"
import { PageHeading, Banner, PageSubHeading, PageWrapper, PageContent, EmploymentImg, Border, CardSection, CardHeading } from "./Pages.styled"
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

              <PartnersSection>
                <CardHeading>Our Clients & Partners</CardHeading>
                <Partners>
                  <li><LogoImg src={BNXLogo}/><br/>
                    BNX Shipping Toronto Inc.
                  </li>
                  <li><img src={GinsengLogo} width='250px' height='45px'/><br/>
                    Korea Ginseng corp.
                  </li>
                  <li><LogoImg src={HankookLogo}/><br/>
                    Hankook Tire Canada Corp.
                  </li>
                  <li><img src={PantosLogo} width='200px' height='60px'/><br/>
                    Pantos Logistics Canada Inc.
                  </li>
                  <li><LogoImg src={NongshimLogo}/><br/>
                    Nongshim America
                  </li>
                  <li><LogoImg src={GlovisLogo}/><br/>
                    Hyundai Glovis
                  </li>
                  <li><img src={LGLogo} width='160px' height='80px'/><br/>
                    LG Electronics
                  </li>
                  <li style={{listStyle:'none', margin:'1rem 0 0 -1rem'}}>... and more</li>
                </Partners>
              </PartnersSection>
          </PageContent>
        </PageWrapper>
    )
}

const Partners = styled.ul`
  list-style: none;
  font-size: 0.9em;
  font-weight: 400;

  @media (min-width: 769px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

const LogoImg = styled.img`
  width: 250px;
  height: 60px;
`

const PartnersSection = styled(CardSection)`
  background: inherit;
  color: inherit;
  box-shadow: 2px 2px 10px var(--main-color);
`
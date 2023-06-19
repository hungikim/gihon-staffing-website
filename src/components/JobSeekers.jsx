import styled from "styled-components"
import { PageHeading, Banner, PageSubHeading, PageSubSubHeading, PageWrapper, PageContent, EmploymentImg, CardSection, CardHeading, PageText } from "./Pages.styled"
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

              <HeadingAndList>
                <PageSubHeading>Where to Begin</PageSubHeading>
                <ul>
                  <li>Applications are accepted in person only.</li>
                  <li>
                      When applying, please ensure that you have two pieces of identification:<br/>
                      <b>Social Insurance Number</b> and a <b>Goverment photo id</b> (ie: driver's license or passport).
                  </li>
                  <li>If you currently hold a temporary social insurance number (900 series), please bring along your work permit as well.</li>
                </ul>
              </HeadingAndList>

              <Solutions/>

              <PageSubHeading style={{textAlign:'left'}}>Submit your resume to begin your job search today!</PageSubHeading>
              <p>
                &emsp;&emsp;Send us your resume to <a href=""><b>gihon.toronto@gmail.com</b></a>.<br/>
                &emsp;&emsp;Once submitted one of our recruiters will contact you to advance with the process.
              </p>
              

            </PageText>

            <PartnersSection>
              <PartnersHeading>
                Our Clients & Partners
              </PartnersHeading>
              <Partners>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={BNXLogo} aspectRatio='235/51'/>
                  </LogoImgContainer>
                  BNX Shipping Inc.
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={GinsengLogo} aspectRatio='400/70'/>
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
                    <LogoImg src={PantosLogo} aspectRatio='424/133'/>
                  </LogoImgContainer>
                  Pantos Canada
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={NongshimLogo} aspectRatio='983/254'/>
                  </LogoImgContainer>
                  Nongshim America
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={GlovisLogo} aspectRatio='313/83'/>
                  </LogoImgContainer>
                  Hyundai Glovis
                </li>
                <li>
                  <LogoImgContainer>
                    <LogoImg src={LGLogo} aspectRatio='196/106'/>
                  </LogoImgContainer>
                  LG Electronics
                </li>
                <AndMore>... and more</AndMore>
              </Partners>
            </PartnersSection>

          </PageContent>

        </PageWrapper>
    )
}

export const Solutions = () => (
  <HeadingAndList>
  <PageSubSubHeading style={{fontSize:'1.05em'}}>We provide solutions<br/> in several types of employment relationships</PageSubSubHeading>
  <ul style={{listStyle:"disc"}}>
    <li>Contract-to-Hire</li>
    <li>Long-term & Short-term Projects</li>
    <li>Direct Placement</li>
  </ul>
  </HeadingAndList>
)

const Partners = styled.ul`
  display: grid;
  list-style: none;
  font-size: 0.9em;
  font-weight: 500;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
    align-items: center;
    padding: 5px 0;
    white-space: nowrap;
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
    grid-template-columns: 1fr 1fr;
    gap: 20px 0px;
    font-size: 0.8em;
  }
`

const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const LogoImg = styled.img`
  aspect-ratio: ${props => props.aspectRatio};
  height: 40px;
  @media (max-width: 768px) {
    height: 25px;
  }
`

const PartnersSection = styled(CardSection)`
  background: inherit;
  color: inherit;
  box-shadow: 2px 2px 10px var(--main-color);
`

const PartnersHeading = styled(CardHeading)`
  color: var(--main-color);
  text-align: center;
  font-size: 1.2em;
`

const AndMore = styled.li`
  @media (min-width: 769px) {
    align-self: end;
  }
`

const HeadingAndList = styled.div`
  @media (min-width: 769px){
    margin: 60px 0;
    display: flex;
    gap: 40px;
    ${PageSubHeading} { white-space: nowrap; }

    ul {
      padding-top: 1.3em;
    }
    /* * { outline: 1px solid;} */
  }
`
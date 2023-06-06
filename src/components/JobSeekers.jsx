import styled from "styled-components"
import { PageHeading, Banner, PageSubHeading, PageWrapper, PageContent, EmploymentImg } from "./Pages.styled"
import employmentImg from '/src/assets/laptop.jpg'

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
              <ul>
                <li>Applications are accepted in person only.</li>
                <li>
                    When applying, please ensure that you have two pieces of identification:
                    Social Insurance Number and a Goverment photo id (ie: driver's license or passport).
                </li>
                <li>If you currently hold a temporary social insurance number (900 series), please bring along your work permit as well.</li>
              </ul>
            
              <PageSubHeading>We provide solutions in several types of employment relationships</PageSubHeading>
              <ul>
                <li>Contract-to-Hire</li>
                <li>Long-term & Short-term Projects</li>
                <li>Direct Placement</li>
              </ul>
            
              <PageSubHeading>Submit your resume to begin your job search today!</PageSubHeading>
              <p>
                Send us your resume to <a href=""><b>gihon.toronto@gmail.com</b></a>.<br/>
                Once submitted one of our recruiters will contact you to advance with the process.
              </p>

              <PageSubHeading>Our Clients & Partners <span style={{color:"var(--stronger-color)"}}>(... Logo / select)</span></PageSubHeading>
              <Partners>
                <li>BNX Shipping Toronto Inc.</li>
                <li>Korea Ginseng corp.</li>
                <li>Hankook Tire Canada Corp.</li>
                <li>Pantos Logistics Canada Inc.</li>
                <li>Nongshim America</li>
                <li>Hyundai Glovis</li>
                <li>LG Electronics</li>
                <span>... and more</span>
              </Partners>

          </PageContent>
        </PageWrapper>
    )
}

const Partners = styled.ul`
  @media (min-width: 769px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
  }
`
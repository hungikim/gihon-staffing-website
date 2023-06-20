import styled from "styled-components"
import { Banner, PageHeading, PageWrapper, PageContent, PageText } from "./Pages.styled"
import employmentImg from '../assets/employment1.jpg'
import IndustriesWeServe from "./IndustriesWeServe"
import EmploymentImg from './EmploymentImg'

export default function Home () {
  return (
    <PageWrapper id="Home">
      <Banner>
        <EmploymentImg src={employmentImg}/>
        <PageHeading>Happy people, productive workplaces, start here.</PageHeading>
      </Banner>
      
      <PageContent>

        <PageText style={{paddingTop:'1rem'}}>
            <IntroUL>
                <li>
                    Serving the Greater Toronto Area, Southern Ontario, and beyond.         
                </li>
                <li>
                    We are a placement service with a permanent focus on customer satisfaction. <br/>
                    We specialize in both Industrial and Corporate placements with over 10 years of staffing experiences.
                </li>
                <li>
                    Our commitment to our clients, whether you are a growing business or an established corporation, is one of excellence.<br/>
                    We appreciate your business and our Gihon Networks Corporation team will go the extra mile to get the job done right.
                </li>
                <li>
                    Gihon Networks provides various staffing services and regularly evaluates our service offerings to ensure that we stay on the cutting edge of our industry.
                    As the pace of technology increases, our clients, representing a broad spectrum of industries, have come to expect more from us.
                    Through our commitment to expanding our services and our efforts to keep pace with new technology, we are able to meet these rising demands.
                </li>
            </IntroUL>
        </PageText>

        <IndustriesWeServe/>

      </PageContent>
    </PageWrapper>
)
}

const IntroUL = styled.ul`
    padding-left: 1rem;
    li {
        margin: 15px;
    }
`

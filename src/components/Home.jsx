import styled from "styled-components"
import { EmploymentImg, Banner, PageHeading, PageWrapper, PageSubHeading, PageContent, Border, CardSection, CardHeading, PageText } from "./Pages.styled"
import employmentImg from '../assets/employment1.jpg'

export default function Home () {
  return (
    <PageWrapper id="Home">
      <Banner>
        <EmploymentImg entImg src={employmentImg} />
        <PageHeading>
            Happy people, productive workplaces, start here.
        </PageHeading>
      </Banner>
      
      <PageContent>

        <PageText>
            <SectionedUL>
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
            </SectionedUL>
        </PageText>

        <CardSection>
            <CardHeading style={{color:"inherit"}}>
                Industries We Serve
            </CardHeading>
            <IndustriesWeServe>
                <li>Customer Service</li>
                <li>Sales</li>
                <li>Help Desk</li>
                <li>Office Support</li>
                <li>Clerical & Administrative</li>
                <li>Banking</li>
                <li>Call Center</li>
                <li>Accounting</li>
                <li>Manufacturing</li>
                <li>Maintenance Tech</li>
                <li>Warehouse & Distribution</li>
                <li>Language Interpretation and Translation</li>
            </IndustriesWeServe>
        </CardSection>
      </PageContent>
    </PageWrapper>
)
}

const SectionedUL = styled.ul`

`

const IndustriesWeServe = styled.ul`
    list-style: disc;
    @media (min-width: 769px) {
        display: grid;
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        > li {width: 80%;}
    }

    @media (max-width: 768px) {
        padding-left: 1.5rem;
    }
`
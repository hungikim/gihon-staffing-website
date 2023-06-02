import styled from "styled-components"
import { EmploymentImg, PageHeading, PageWrapper, PageSubHeading } from "./Pages.styled"
import employmentImage1 from '../assets/employment1.jpg'

export default function Home () {
  return (
    <HomeWrapper id="Home">
      <EmploymentImg src={employmentImage1} width='100%' height='150px' alt="employment_image_1"/>
      <Introduction>
        <PageHeading>
            Happy people, productive workplaces, start here.
        </PageHeading>
        <ul>
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
            Through our commitment to expanding our services and our efforts to keep pace with new technology, we are able to meet theses rising demands.
          </li>
        </ul>
      </Introduction>
      <section>
        <PageSubHeading>
            Industries We Serve
        </PageSubHeading>
        <ul>
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
        </ul>
      </section>
    </HomeWrapper>
)
}

const HomeWrapper = styled(PageWrapper)`
`

const Introduction = styled.section`
`

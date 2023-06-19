import styled from "styled-components"
import { EmploymentImg, Banner, PageHeading, PageWrapper, PageSubHeading, PageContent, Border, CardSection, CardHeading, PageText } from "./Pages.styled"
import employmentImg from '../assets/employment1.jpg'
import headsetIcon from '../assets/headphone-headset-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'
import documentIcon from '../assets/text-documents-line-icon.svg'

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

        <CardSection>
            <CardHeading style={{color:"inherit", marginBottom:'2.5rem'}}>
                Industries We Serve
            </CardHeading>
            <IndustriesWeServe>
                <Industries>
                    <Industry>
                        <IndustryIcon src={headsetIcon} width='60px' height='60px'/>
                        <IndustryName>Customer Service</IndustryName>
                        <IndustryName>Help Desk</IndustryName>
                        <IndustryName>Call Center</IndustryName>
                        <IndustryName>Office Support</IndustryName>
                    </Industry>
                </Industries>

                <Industries>
                    <Industry>
                        <IndustryIcon src={settingsIcon} width='60px' height='60px'/>
                        <IndustryName>Warehouse & Distribution</IndustryName>
                        <IndustryName>Maintenance Tech</IndustryName>
                        <IndustryName>Manufacturing</IndustryName>
                        <IndustryName>Sales</IndustryName>
                    </Industry>
                </Industries>

                <Industries>
                    <Industry>
                        <IndustryIcon src={documentIcon} width='60px' height='60px'/>
                        <IndustryName>Banking</IndustryName>
                        <IndustryName>Accounting</IndustryName>
                        <IndustryName>Clerical & Administrative</IndustryName>
                        <IndustryName>Language Interpretation and Translation</IndustryName>
                    </Industry>
                </Industries>

            </IndustriesWeServe>
        </CardSection>
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

const IndustriesWeServe = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 50px;

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
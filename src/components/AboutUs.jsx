import { EmploymentImg, Banner, PageContent, PageHeading, PageSubSubHeading, PageWrapper } from "./Pages.styled";
import employmentImg from '/src/assets/team.jpg'
import styled from 'styled-components'

export default function AboutUs() {
    return (
        <PageWrapper id="AboutUs">
          <Banner>
            <EmploymentImg src={employmentImg} />
            <PageHeading>All About Gihon Networks</PageHeading>
          </Banner>
          <PageContent>
            <Prov>"A generous person will prosper; whoever refreshes others will be refreshed." (Prov 11:25)</Prov>   
            <p style={{ marginTop:'2rem', fontWeight:'200' }}>
                &emsp;&emsp;'Gihon Networks Corp.' is a leading Korean-Canadian owned and operated staffing and resources firm in the Greater Toronto Area founded and incorporated in Ontario in the year of the Lord 2015.
                
                We have earned our excellent reputation by serving our clients through sourcing top talent for temporary, contract, and full-time staffing requirements, based on ethical principles and the development of innovative solutions. 
                <br/>&emsp;&emsp;Through our special divisions, we provide our clients with the full spectrum of staffing services in a broad range of positions.

                This has helped to make us one of the top, Korean-Canadian employment agencies in Toronto, serving both job seekers and companies in the Greater Toronto Area, Southern Ontario, and across Canada and the globe.
            </p>
          </PageContent>
        </PageWrapper>
    )
}

const Prov = styled(PageSubSubHeading)`
    font-style: italic;
    text-align: center;
    font-weight: 100;
    margin-top: 0;
`
import styled from "styled-components";
import { PageHeading, Banner, PageSubHeading, PageWrapper, PageSubSubHeading, EmploymentImg, PageContent, Border, CardSection, CardHeading } from "./Pages.styled";
import employmentImg from '/src/assets/employment2.jpg'
import { ContactForm } from "./ContactForm";

export default function Employers() {
    return (
        <PageWrapper id="Employers">
          <Banner>
            <EmploymentImg src={employmentImg}/>
            <PageHeading>Employers</PageHeading>
          </Banner>

          <PageContent>
            
            <PageSubHeading style={{marginTop:0}}>Benefits of Using a Placement Service</PageSubHeading>
            <p>
                &emsp;&emsp;As a professional placement service, we are able to provide you with labour flexibility
                combined with all inclusive hourly rates. This would inevitably be less than what you would be
                paying your own permanent staff considering the amount of time and costs of ongoing recruiting.
            </p>

            <PageSubHeading>Placement Options</PageSubHeading>
            <PlacementOptions>
                <li>
                    <PageSubSubHeading>Temporary Staffing</PageSubSubHeading>
                    This option is designed for businesses that have seasonal variations or require reliable temporary staffing on short notice.
                </li>
                <li>
                    <PageSubSubHeading>Temp-to-Perm</PageSubSubHeading>
                    This option allows business to evaluate the worker before making a full-time hiring decision. 
                    This helps reduce the turnover by allowing both the client and the worker before making a full-time hiring decision. 
                    This helps reduce the turnover by allowing both the client and the worker to see if there is a perfect fit within the organization.
                </li>
                <li>
                    <PageSubSubHeading>Permanent Placement</PageSubSubHeading>
                    Gihon Networks Corp. Recruitment Specialists will source, prescreen, select and interview potential 
                    candidates based on the detailed job description and company requirements. After the company reviews the potential candidate's files 
                    (consisting of resumes and reference checks), the company is then given the opportunity to schedule interviews at their convenience.
                </li>
                <li>
                    <PageSubSubHeading>Payroll Service</PageSubSubHeading>
                    This service eliminates the administrative and accounting burdens allowing the clients to maintain
                    control over their recruiting. We handle payroll administration covering all payroll costs which are inclusive of the following:
                    Workmen's Compensation, Employer's Health Tax, Vacation Pay. In addition to the Government Remittances, Gihon Networks Corp. 
                    offers payroll set-up, pay cheques, T4's Record of Employments. The client will be given an all-inclusive bill rate which covers all of the above. 
                </li>
            </PlacementOptions>
        
            <PageSubHeading>We provide solutions in several types of employment relationships</PageSubHeading>
            <ul style={{listStyle:"disc"}}>
                <li>Contract-to-Hire</li>
                <li>Long-term & Short-term Projects</li>
                <li>Direct Placement</li>
            </ul>
            
            <CardSection>
              <CardHeading style={{marginBottom: 0, color:'inherit'}}>Our Search Process For Your Business</CardHeading>
              <SearchProcess>
                <li>
                  <PageSubSubHeading style={{color:'var(--bg-color)'}}>Needs Analysis</PageSubSubHeading>
                  <ol>
                    <li>
                      <ListTitle>Pre-Consulting</ListTitle>
                      <ListText>Discuss and analyze company needs and information</ListText>
                    </li>
                    <li>
                      <ListTitle>Profile Tuning</ListTitle>
                      <ListText>Discuss and agree on detailed position specification</ListText>
                    </li>
                  </ol>
                </li>
                <li>
                  <PageSubSubHeading style={{color:'var(--bg-color)'}}>Sourcing & Selection</PageSubSubHeading>
                  <ol>
                    <li>
                      <ListTitle>Sourcing</ListTitle>
                      <ListText>On/Offline Target Sourcing (Long List)</ListText>
                    </li>
                    <li>
                      <ListTitle>Selection</ListTitle>
                      <ListText>Screen long list candidate via phone interview (Short List)</ListText>
                    </li>
                    <li>
                      <ListTitle>Pre-Interview</ListTitle>
                      <ListText>Screen candidates via full & formal interviews</ListText>
                    </li>
                    <li>
                      <ListTitle>Recommendation</ListTitle>
                      <ListText>Present selected candidates to the client</ListText>
                    </li>
                  </ol>
                </li>
                <li>
                  <PageSubSubHeading style={{color:'var(--bg-color)'}}>Interview & Closing</PageSubSubHeading>
                  <ol>
                    <li>
                      <ListTitle>Client Interview</ListTitle>
                      <ListText>Client interview with selected candidates</ListText>
                    </li>
                    <li>
                      <ListTitle>Offer & Counter-offer</ListTitle>
                      <ListText>Compensation offer to the finalist</ListText>
                    </li>
                    <li>
                      <ListTitle>Finalization</ListTitle>
                      <ListText>Negotiation finalized with offer signed</ListText>
                    </li>
                  </ol>
                </li>
              </SearchProcess>
            </CardSection>
          </PageContent>
        </PageWrapper>
    )
}

const PlacementOptions = styled.ul`
  list-style-type: disc;
  > * { margin: 1.2rem 0;}
`

const SearchProcess = styled.ol`
  display: flex;
  margin-left: 1rem;
  gap: 20px;
  > * { flex-grow: 1; flex-basis: 33%;}
  li { font-size: 1em; }
  li ol {
    list-style: upper-alpha;
    padding-left: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

const ListTitle = styled.h4`
  font-weight: 400;
  font-size: 1em;
`
const ListText = styled.p`
  font-weight: 200;
  font-size: 0.9em;
`


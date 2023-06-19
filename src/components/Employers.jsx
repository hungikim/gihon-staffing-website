import styled from "styled-components";
import { PageHeading, Banner, PageSubHeading, PageWrapper, PageSubSubHeading, EmploymentImg, PageContent, PageText } from "./Pages.styled";
import employmentImg from '/src/assets/employment2.jpg'
import LiCollapsable from "./LiCollapsable";
import OurSearchProcess from './OurSearchProcess'
import { Solutions } from "./JobSeekers";

export default function Employers() {
    return (
        <PageWrapper id="Employers">
          <Banner>
            <EmploymentImg src={employmentImg}/>
            <PageHeading>Employers</PageHeading>
          </Banner>

          <PageContent>
            <PageText style={{paddingBottom:0}}>
              <PageSubHeading style={{marginTop:0}}>Benefits of Using a Placement Service</PageSubHeading>
              <p>
                  &emsp;&emsp;As a professional placement service, we are able to provide you with labour flexibility
                  combined with all inclusive hourly rates. This would inevitably be less than what you would be
                  paying your own permanent staff considering the amount of time and costs of ongoing recruiting.
              </p>

              <PageSubHeading>Placement Options</PageSubHeading>
              <PlacementOptions>
                <LiCollapsable heading='Temporary Staffing'>
                  <p>&emsp;This option is designed for businesses that have seasonal variations or require reliable temporary staffing on short notice.</p>
                </LiCollapsable>
                <LiCollapsable heading='Temp-to-Perm'>
                  <p>
                    &emsp;This option allows business to evaluate the worker before making a full-time hiring decision. 
                    This helps reduce the turnover by allowing both the client and the worker before making a full-time hiring decision. 
                    This helps reduce the turnover by allowing both the client and the worker to see if there is a perfect fit within the organization.
                  </p>
                </LiCollapsable>
                <LiCollapsable heading='Permanent Placement'>
                  <p>
                    &emsp;Gihon Networks Corp. Recruitment Specialists will source, prescreen, select and interview potential 
                    candidates based on the detailed job description and company requirements. After the company reviews the potential candidate's files 
                    (consisting of resumes and reference checks), the company is then given the opportunity to schedule interviews at their convenience.
                  </p>
                </LiCollapsable>
                <LiCollapsable heading='Payroll Service'>
                  <p>
                    &emsp;This service eliminates the administrative and accounting burdens allowing the clients to maintain
                    control over their recruiting. We handle payroll administration covering all payroll costs which are inclusive of the following:
                    Workmen's Compensation, Employer's Health Tax, Vacation Pay. In addition to the Government Remittances, Gihon Networks Corp. 
                    offers payroll set-up, pay cheques, T4's Record of Employments. The client will be given an all-inclusive bill rate which covers all of the above. 
                  </p>
                </LiCollapsable>
              </PlacementOptions>
          
              <Solutions/>

            </PageText>

            <OurSearchProcess/>

          </PageContent>

        </PageWrapper>
    )
}

const PlacementOptions = styled.ul`
  list-style-type: disc;
  padding-left: 15px;
`


const CollapsableSubSubHeading = styled(PageSubSubHeading)`
  
`

const CollapseIcon = styled.span`
`

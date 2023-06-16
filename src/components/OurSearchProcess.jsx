import { PageSubSubHeading, CardSection, CardHeading } from "./Pages.styled";
import styled from "styled-components";

export default function OurSearchProcess() {
  return (
    <Section>
      <CardHeading style={{ color: "var(--main-color)" }}>
        Our Search Process For Your Business
      </CardHeading>
      <SearchProcess>
        <LI>
          <LIHeading>Needs Analysis</LIHeading>
          <OL>
            <SubLI>
              <SubLIHeading>Pre-Consulting</SubLIHeading>
              <Desc>Discuss and analyze company needs and information</Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Profile Tuning</SubLIHeading>
              <Desc>Discuss and agree on detailed position specification</Desc>
            </SubLI>
          </OL>
        </LI>
        <LI>
          <LIHeading>Sourcing & Selection</LIHeading>
          <OL>
            <SubLI>
              <SubLIHeading>Sourcing</SubLIHeading>
              <Desc>On/Offline Target Sourcing (Long List)</Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Selection</SubLIHeading>
              <Desc>
                Screen long list candidate via phone interview (Short List)
              </Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Pre-Interview</SubLIHeading>
              <Desc>Screen candidates via full & formal interviews</Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Recommendation</SubLIHeading>
              <Desc>Present selected candidates to the client</Desc>
            </SubLI>
          </OL>
        </LI>
        <LI>
          <LIHeading>Interview & Closing</LIHeading>
          <OL>
            <SubLI>
              <SubLIHeading>Client Interview</SubLIHeading>
              <Desc>Client interview with selected candidates</Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Offer & Counter-offer</SubLIHeading>
              <Desc>Compensation offer to the finalist</Desc>
            </SubLI>
            <SubLI>
              <SubLIHeading>Finalization</SubLIHeading>
              <Desc>Negotiation finalized with offer signed</Desc>
            </SubLI>
          </OL>
        </LI>
      </SearchProcess>
    </Section>
  );
}

const Section = styled(CardSection)`
  /* outline: 1px solid black; */
  box-shadow: none;
  padding: 0;
  margin: 0;

`;

const SearchProcess = styled.ol`
  /* outline: 2px solid black; */
  display: flex;
  gap: 50px;
  list-style-position: inside;

  @media (min-width: 769px) {
    padding: 30px 2vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
  }
`;

const LI = styled.li`
  /* outline: 1px solid; */
  flex-grow: 1;
  flex-basis: 33%;

  font-size: 1em;
  padding: 10px 30px 30px 30px;
  background: var(--bg-color);
  color: var(--main-color);
  box-shadow: 2px 2px 6px;
`;

const LIHeading = styled(PageSubSubHeading)`
  /* outline: 1px solid blue; */
  color: var(--main-color);
  display: inline-block;
  margin-left: 5px;
`;

const OL = styled.ol`
  /* outline: 1px dotted; */
  list-style: upper-alpha;
  padding: 0 2rem 0 0;

  @media (min-width: 769px) {
    margin-left: 4rem;
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const SubLIHeading = styled.h4`
  font-weight: 400;
  font-size: 1em;
`;
const Desc = styled.p`
  font-weight: 200;
  font-size: 0.9em;
  margin-left: 5px;
`;

const SubLI = styled.li``;

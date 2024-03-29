import { PageSubSubHeading, CardHeading } from "./Pages.styled";
import styled from "styled-components";
import { Wrapper, OL, LI } from "./MultipleCards.styled";
import LiCollapsable from "./LiCollapsable";
import { useSelector } from "react-redux";

export default function OurSearchProcess() {
  const isMobile = useSelector(state=>state.mobile.isMobile)

  const mobileHeadingStyle = {
    background: "var(--lighter-color)",
    boxShadow: "1px 1px 2px",
    color: "purple"
  }

  return (
    <Wrapper>
      <CardHeading style={{ color: "var(--main-color)" }}>
        Our Search Process For Your Business
      </CardHeading>
      
      {isMobile ? (
        <OL style={{gap:0}}>
          <LiCollapsable heading="1. Needs Analysis" headingStyle={mobileHeadingStyle}>
            <LiChild1 />
          </LiCollapsable>
          <LiCollapsable heading="2. Sourcing & Selection" headingStyle={mobileHeadingStyle}>
            <LiChild2 />
          </LiCollapsable>
          <LiCollapsable heading="3. Interview & Closing" headingStyle={mobileHeadingStyle}>
            <LiChild3 />
          </LiCollapsable>
        </OL>
      ) : (
        <OL>
          <LI>
            <LIHeading>Needs Analysis</LIHeading>
            <LiChild1 />
          </LI>
          <LI>
            <LIHeading>Sourcing & Selection</LIHeading>
            <LiChild2 />
          </LI>
          <LI>
            <LIHeading>Interview & Closing</LIHeading>
            <LiChild3 />
          </LI>
        </OL>
      )}
    </Wrapper>
  );
}

const LiChild1 = () => (
  <SubOL>
    <SubLI>
      <SubLIHeading>Pre-Consulting</SubLIHeading>
      <Desc>Discuss and analyze company needs and information</Desc>
    </SubLI>
    <SubLI>
      <SubLIHeading>Profile Tuning</SubLIHeading>
      <Desc>Discuss and agree on detailed position specification</Desc>
    </SubLI>
  </SubOL>
);

const LiChild2 = () => (
  <SubOL>
    <SubLI>
      <SubLIHeading>Sourcing</SubLIHeading>
      <Desc>On/Offline Target Sourcing (Long List)</Desc>
    </SubLI>
    <SubLI>
      <SubLIHeading>Selection</SubLIHeading>
      <Desc>Screen long list candidate via phone interview (Short List)</Desc>
    </SubLI>
    <SubLI>
      <SubLIHeading>Pre-Interview</SubLIHeading>
      <Desc>Screen candidates via full & formal interviews</Desc>
    </SubLI>
    <SubLI>
      <SubLIHeading>Recommendation</SubLIHeading>
      <Desc>Present selected candidates to the client</Desc>
    </SubLI>
  </SubOL>
);

const LiChild3 = () => (
  <SubOL>
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
  </SubOL>
);

const LIHeading = styled(PageSubSubHeading)`
  /* outline: 1px solid blue; */
  color: var(--main-color);
  display: inline-block;
  margin-left: 5px;
`;

const SubOL = styled.ol`
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

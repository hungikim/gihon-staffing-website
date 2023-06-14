import styled from "styled-components";

export const PageWrapper = styled.section`
  position: relative;
  width: 100%;
  scroll-margin-top: var(--desktop-navbar-height);
  @media (max-width: 768px) {
    scroll-margin-top: var(--mobile-navbar-height);
  }

`

export const Banner = styled.div`
  position: relative;
`

export const EmploymentImg = styled.img`
  width: 100%;
  height: 250px;
  filter: brightness(70%);
  object-fit: cover;
  z-index: -1;

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const PageHeading = styled.h1`
  position: absolute;
  padding: 0 10vw;
  bottom: 3rem;
  color: var(--bg-color);

  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 0 2rem;
    bottom: 2rem;
  }
`

export const PageContent = styled.section`
  position: relative;
  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 769px) {
    padding: 3rem 13vw;
  }
`

export const PageSubHeading = styled.h2`
  font-size: 1.3em;
  margin: 2rem 0 1rem 0;
  font-weight: 600;
  color: var(--stronger-color);
`

export const PageSubSubHeading = styled.h3`
  font-size: 1.15em;
  margin: 1rem 0 0.5rem 0;
  font-weight: 500;
  color: var(--stronger-color);
`

export const Border = styled.div`
  margin: 35px 0;
  border: 1px solid var(--lighter-color);
`

export const CardSection = styled.section`
  background: var(--stronger-color);
  padding: 20px 50px 30px 50px;
  margin-top: 50px;
  color: var(--bg-color);
  box-shadow: 5px 5px 15px var(--main-color);
`

export const CardHeading = styled(PageSubHeading)`
  margin: 15px 0 20px 0;
`
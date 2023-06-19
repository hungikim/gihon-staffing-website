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
  bottom: 15%;
  color: var(--bg-color);
  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 0 2rem;
  }
`

export const PageContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PageSubHeading = styled.h2`
  font-size: 1.3em;
  margin: 2rem 0 1rem 0;
  font-weight: 600;
  color: purple;
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
  /* background: #7086b0; */  
  /* color: var(--bg-color); */
  padding: 30px 20px;
  width: clamp(200px, 90vw, 1300px);
  margin-bottom: 50px;
  box-shadow: 5px 5px 15px var(--main-color);

  @media (max-width: 768px) {
    padding: 10px 20px;
    padding-bottom: 30px;
    width: 90vw;
  }
`

export const CardHeading = styled(PageSubHeading)`
  text-align: center;
  margin: 15px 0 20px 0;
`

export const PageText = styled.section`
  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 769px) {
    padding: 3rem 13vw;
  }
`
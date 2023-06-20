import { ContactForm } from "./ContactForm";
import { Banner, PageContent, PageHeading, PageWrapper, PageText } from "./Pages.styled";
import employmentImg from '/src/assets/contact.jpg'
import styled from "styled-components";
import EmploymentImg from './EmploymentImg'

export default function Contact() {
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || process.env.VITE_GOOGLE_API_KEY
    return (
        <PageWrapper id="Contact">
          <Banner>
            <EmploymentImg src={employmentImg}/>
            <PageHeading>Contact</PageHeading>
          </Banner>
          <ContactContent>
            <PageText>
                  We encourage you to contact us using one of the methods below.<br/><br/>
                  <Contacts>
                    <div>
                      840 Queens Plate Dr, Toronto<br/>
                      ON M9W 0E7
                    </div>
                    <div>
                      M: <a href="tel:6475450922">647 545 0922</a><br/>
                      O: 647 794 7845<br/>
                      E: <a href='mailto: gihon.toronto@gmail.com'>gihon.toronto@gmail.com</a><br/>
                    </div>
                  </Contacts>
                  <br/>
                  Or simply fill out the form below and send to us. We enjoy hearing from you!<br/><br/>
              
              <FormAndMap>
                  <ContactForm name="contact-form"/>
                  <Map
                      width="480"
                      height="360"
                      style={{border:'1px solid var(--lighter-color)'}}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=840+Queens+Plate+Dr,+Etobicoke,+ON+M9W+0E7`} 
                  />
              </FormAndMap>
            </PageText>
          </ContactContent>
        </PageWrapper>
    )
}

const ContactContent = styled(PageContent)`
  font-size: 1em;
  background: cyan;
  box-shadow: 2px 2px 12px;

  @media (min-width: 769px) {
    margin: 2rem 10vw 100px 10vw;
  }
  @media (max-width: 768px) {
    margin: 10px 10px 30px 10px;
  }
`

const FormAndMap = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`

const Map = styled.iframe`
  @media (min-width: 769px) {
    flex-grow: 1;
  }
  @media (max-width: 768px) {
    width: 80vw;
    height: 40vh;
  }
`

const Contacts = styled.div`
  display: flex;
  font-weight: 500;
  gap: 8rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`
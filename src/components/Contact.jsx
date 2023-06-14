import { ContactForm } from "./ContactForm";
import { EmploymentImg, Banner, PageContent, PageHeading, PageWrapper } from "./Pages.styled";
import employmentImg from '/src/assets/contact.jpg'
import styled from "styled-components";

export default function Contact() {
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || process.env.VITE_GOOGLE_API_KEY
    return (
        <PageWrapper id="Contact">
          <Banner>
            <EmploymentImg src={employmentImg} />
            <PageHeading>Contact</PageHeading>
          </Banner>
          <ContactContent>
            <p>
                We encourage you to contact us using one of the methods below.<br/>
                <br/>
                <b>
                840 Queens Plate Dr, Toronto<br/>
                ON M9W 0E7<br/>
                <br/>
                M: <a href="tel:6475450922">647 545 0922</a><br/>
                O: 647 794 7845<br/>
                E: <a href='mailto: gihon.toronto@gmail.com'>gihon.toronto@gmail.com</a><br/>
                <br/>
                </b>
                Or simply fill out the forms below and send to us. We enjoy hearing from you!<br/><br/>
            </p>
            <FormAndMap>
                <ContactForm name="contact-form"/>
                <iframe
                    width="480"
                    height="360"
                    style={{border:'1px solid var(--lighter-color)'}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=840+Queens+Plate+Dr,+Etobicoke,+ON+M9W+0E7`} 
                />
            </FormAndMap>
            
          </ContactContent>
        </PageWrapper>
    )
}

const ContactContent = styled(PageContent)`
  margin-top: 0;
  font-size: 1.1em;

`

const FormAndMap = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    iframe {
        width: 85vw;
        height: 40vh;
    }
  }

  @media (min-width: 769px) {
    iframe {
        flex-grow: 1;
    }
  }
`
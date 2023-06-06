import { ContactForm } from "./ContactForm";
import { EmploymentImg, Banner, PageContent, PageHeading, PageWrapper, Form } from "./Pages.styled";
import employmentImg from '/src/assets/contact.jpg'
import styled from "styled-components";

export default function Contact() {
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
                840 Queens Plate Dr, Toronto<br/>
                ON M9W 0E7<br/>
                <br/>
                M: 647 545 0922<br/>
                O: 647 794 7845<br/>
                E: <a href='mailto: gihon.toronto@gmail.com'>gihon.toronto@gmail.com</a><br/>
                <br/>
                Or simply fill out the forms below and send to us. We enjoy hearing from you!<br/><br/>
            </p>
            <FormAndMap>
                <ContactForm/>
                <iframe
                    width="480"
                    height="360"
                    style={{border:0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=840+Queens+Plate+Dr,+Etobicoke,+ON+M9W+0E7`} 
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
  align-items: start;
  
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
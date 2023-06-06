import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from './Pages.styled';
import styled from 'styled-components';

export const ContactForm = () => {
  const form = useRef();
  const formText = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        form.current.reset()
        formText.current.innerText = "Your message has been sent. Thanks!"
      }, (error) => {
        formText.current.innerText = error.text;
      });
  };

  const test = (e) => {
    e.preventDefault()
    formText.current.innerHTML="Your message has been sent"
  }
  return (
    <FormWrapper>
        <Form ref={form} id='contact-form' onSubmit={sendEmail}>
            <input placeholder='Name *' type='text' id='from_name' name='from_name' required/>
            <input placeholder='Email *' type='email' id='from_email' name='from_email' required/>
            <input placeholder='Phone' type='tel' id='from_phone' name='from_phone' />
            <input placeholder='Subject' type='text' id='subject' name='subject' />
            <textarea placeholder='Message *' id='message' name='message' required/>
            <button type="submit" value="Send">Send</button>
        </Form>
        <FormText ref={formText}></FormText>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const FormText = styled.div`
    margin-left: auto;
    font-size: 0.9em;
    font-style: italic;
`
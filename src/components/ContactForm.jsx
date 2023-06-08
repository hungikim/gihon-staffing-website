import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

export const ContactForm = ({ name }) => {
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

  return (
    <FormWrapper>
        <Form ref={form} name={name} method="POST" data-netlify='true'>
            <label><input placeholder='Name *' type='text' id='from_name' name='from_name' required/></label>
            <label><input placeholder='Email *' type='email' id='from_email' name='from_email' required/></label>
            <label><input placeholder='Phone' type='tel' id='from_phone' name='from_phone' /></label>
            <label><input placeholder='Subject' type='text' id='subject' name='subject' /></label>
            <label><textarea placeholder='Message *' id='message' name='message' required/></label>
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
    align-items: center;
`

const Form = styled.form`
  input {
    padding-left: 1rem; 
  }
  textarea {
    padding-left: 1rem;
    padding-top: 0.5rem;
    resize: none;
  }
  input, textarea, button {
    border: 2px solid var(--lighter-color);
    border-radius: 5px;
  }
  button {
    background: var(--stronger-color);
    color: var(--bg-color);
  }

  @media (min-width: 769px) {
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(4, 50px);
    
    input, textarea { font-size: 0.8em; }
    textarea { grid-row: span 3; }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    input, textarea { width: 60vw; }
    button {
      width: 150px;
      height: 40px;
    }
  }
`

const FormText = styled.div`
    font-size: 0.9em;
    font-style: italic;
    @media (min-width: 769px) {
      margin-left: 270px;
    }
`
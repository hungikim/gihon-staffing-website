import styled from 'styled-components';

export const ContactForm = ({ name }) => {

  return (
    <FormWrapper>
        <Form method="POST">
            <input type='hidden' name='form-name' value={name}/>
            <input placeholder='Name *' type='text' id='name' name='name' required/>
            <input placeholder='Email *' type='email' id='email' name='email' required/>
            <input placeholder='Phone' type='tel' id='phone' name='phone' />
            <input placeholder='Subject' type='text' id='subject' name='subject' />
            <textarea placeholder='Message *' id='message' name='message' required/>
            <button type="submit" value="Send">Send</button>
        </Form>
        <FormText></FormText>
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
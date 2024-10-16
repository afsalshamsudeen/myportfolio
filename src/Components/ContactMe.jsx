import styled from "styled-components"

const Container =styled.div`
//section
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
`;
const Wrapper = styled.div``;
const Title = styled.h1`
    margin-bottom: 30px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;  // Set the max width of the form
    margin: 0 auto;

    @media (min-width: 800px) {
    gap: 40px;
  }
`;
const FormItems = styled.div``;
const Label = styled.label``;
const Input = styled.input`
    border-radius: 20px;
    border: #888 1px solid;
    box-sizing: border-box;
    justify-self: center;
    background-color: var(--background-color);
    color: var(--form-text-color);
    height: 50px;
    &::placeholder{
        color: var(--form-text-color);
    }
    padding: 0 20px;  // Add padding inside input
    width: 100%;
    
`;
const Desc = styled.textarea`
    padding-top: 10px;
    resize: none;
    height: 250px;
    border-radius: 15px;
    background-color: var(--background-color);
    color: var(--form-text-color);
    &::placeholder{
        color: var(--form-text-color);
    }

    width: 100%;          // Set the width to fill form area
    height: 150px; 

    @media (min-width: 800px) {
    width: 100%;
    font-size: 16px;     // Adjust font size
  }

  @media (min-width: 1400px) {
    width: 100%;
  }
`;
const Submit = styled.button`
//hover btn
background-color: var(--btn-color);
    color: var(--btn-text-color);
    border: none;
    border-radius: 20px;
    width: 126px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
    cursor: pointer;
    margin: auto;

    &:hover{
        transform: scale(1.05);
    }
    :active{
        transform: translateY(2px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    }
`;

const ContactMe = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <Wrapper>
        <Form action="">
            <FormItems>
                <Label htmlFor="name" hidden>
                    Name
                </Label>
                <Input type="text" name="name" id="name" placeholder="Name" required/>
            </FormItems>
            <FormItems>
                <Label htmlFor="email" hidden>
                    Email
                </Label>
                <Input type="text" name="email" id="email" placeholder="Email" required/>
            </FormItems>
            <FormItems>
                <Label htmlFor="message" hidden>
                    Message
                </Label>
                <Desc name="message" id="message" placeholder="Message" required/>
            </FormItems>
            <Submit>Submit</Submit>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default ContactMe

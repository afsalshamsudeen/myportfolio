import styled from "styled-components"

const Container = styled.div`
    text-align: center;

`;
const Wrapper = styled.div``;
const P = styled.p`
    font-size: 16px;
    color: var(--footer-text-color);
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <P>&copy; 2024 Afsal Shamsudeen.<br/>
        All rights reserved
        </P>
      </Wrapper>
    </Container>
  )
}

export default Footer

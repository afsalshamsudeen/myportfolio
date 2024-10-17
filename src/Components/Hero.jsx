import styled from "styled-components"



import light_logo from "../assets/Hero_Image.jpg";
import dark_logo from "../assets/dark_logo.jpg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import twitterlight from "../assets/twitter-light.svg"
import twitterdark from "../assets/twitter-dark.svg"
import githublight from "../assets/github-light.svg";
import githubdark from "../assets/github-dark.svg";
import linkedinlight from "../assets/linkedin-light.svg";
import linkedindark from "../assets/linkedin-dark.svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CV from "../assets/cv.pdf";
import { useTheme } from "../Common/ThemeContext";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
    height: 100dvh;
    min-height: 500px;
    @media (width >= 800px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-evenly;

        
    }
    @media (width >= 400px) {
        

        
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

const HeroImage = styled.img`
    max-width: 200px;

    @media (width >= 800px) {
        max-width: 250px;
        width: 250px;  
    }
    @media (width >= 1400px) {
        max-width: 300px;
        width: 300px;  
    }
`;
const ThemeToggle = styled.img`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 25px;
    
    &:hover{
        cursor: pointer;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const Title = styled.h1`
`;

const Br = styled.br`

`;
const Location = styled.h3`
    font-weight: 500;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: #615f5f;
`;
const JobTitle = styled.h2`

`;

const Links = styled.span`
    display: flex;
    gap: 25px;
    justify-content: center;
`;

const Logo = styled.img`
    width: 30px;
`;

const Socials = styled.a`
    margin: 0;
    width: fit;
    align-self: center;

`;

const Desc = styled.p`
    max-width: 24ch;
    align-self: center;

`;

const Resumebtn = styled.button`
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

    &:hover{
        transform: scale(1.05);
    }
    :active{
        transform: translateY(2px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    }

`;

const Hero = () => {
    const {theme, toggleTheme} = useTheme();
    const Theme_Icon = theme === 'light' ? sun : moon;
    const Hero_Image = theme === 'light' ? light_logo : dark_logo;
    const Twitter_Icon = theme === 'light' ? twitterlight : twitterdark;
    const LinkedIn_Icon = theme === 'light' ? linkedinlight : linkedindark;
    const GitHub_Icon = theme === 'light' ? githublight : githubdark;
  return (
    <Container>
      <Wrapper>
        <HeroImage src={Hero_Image} alt="profile picture"></HeroImage>
        <ThemeToggle src={Theme_Icon} alt="theme icon" onClick={toggleTheme}></ThemeToggle>
      </Wrapper>

      <RightWrapper>
        <Title>Afsal<Br/>Shamsudeen</Title>
        <Location><LocationOnIcon/> Trivandrum,Kerala</Location>
        <JobTitle>WebApp Developer</JobTitle>
        <Links>
            <Socials href="http://twitter.com/<ur username>" target="_blank">
                <Logo src={Twitter_Icon} alt="twitter icon"></Logo>            
            </Socials>
            <Socials href="http://linkedin.com/<ur username>" target="_blank">
                <Logo src={LinkedIn_Icon} alt="linkedin icon"></Logo>            
            </Socials>
            <Socials href="http://github.com/<ur username>" target="_blank">
                <Logo src={GitHub_Icon} alt="github icon"></Logo>            
            </Socials>

        </Links>
        <Desc>I love coding and crafting things.</Desc>
            <Socials href={CV} download>
            <Resumebtn>Resume</Resumebtn>
            </Socials>
        

      </RightWrapper>
    </Container>
  )
}

export default Hero

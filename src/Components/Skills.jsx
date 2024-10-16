import styled from "styled-components"

import CheckMarkIconDark from "../assets/checkmark-dark.svg"
import CheckMarkIconLight from "../assets/checkmark-light.svg"
import MySkills from "../Common/MySkills";
import { useTheme } from "../Common/ThemeContext";

const Container = styled.div`
// main
    display: flex;
    flex-direction: column;
    text-align: center;
    

`;
const Wrapper = styled.div`
//skill list
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    flex-wrap: wrap;
    row-gap: 40px;
    max-width: 26ch;
    @media (width >= 800px) {
      max-width: fit-content;
      gap: 30px;

    
  }
`;
const Title = styled.h1`
    margin-bottom: 30px;
`;
const Hr = styled.hr`
    width: 100px;
    height: 1px;
    border: none;
    background-color: var(--text-color);
    margin: 30px auto;

    @media (width >= 800px) {
      width: 300px;
    
  }
`;

const Skills = () => {
  const {theme} = useTheme();
  const CheckMark = theme === 'light' ? CheckMarkIconLight : CheckMarkIconDark;
  return (
    <Container>
        <Title>Skills</Title>
      <Wrapper>
        <MySkills src={CheckMark} skill={"HTML"} />
        <MySkills src={CheckMark} skill={"CSS"} />
        <MySkills src={CheckMark} skill={"JavaScript"} />
        <MySkills src={CheckMark} skill={"React JS"} />
      </Wrapper>
        <Hr/>
      <Wrapper>
        <MySkills src={CheckMark} skill={"Node JS"} />
        <MySkills src={CheckMark} skill={"Express"} />
        <MySkills src={CheckMark} skill={"JSON"} />
        <MySkills src={CheckMark} skill={"MongoDB"} />
        <MySkills src={CheckMark} skill={"Firebase"} />
      </Wrapper>
        <Hr/>
      <Wrapper>
        <MySkills src={CheckMark} skill={"Git"} />
        <MySkills src={CheckMark} skill={"Redux"} />
        <MySkills src={CheckMark} skill={"Postman"} />
        <MySkills src={CheckMark} skill={"Bootstrap"} />
      </Wrapper>
    </Container>
  )
}

export default Skills

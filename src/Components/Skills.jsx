import styled from "styled-components"

import CheckMarkIconDark from "../assets/checkmark-dark.svg"
import CheckMarkIconLight from "../assets/checkmark-light.svg"
import HTMLLIGHT from "../assets/htmllight.png"
import HTMLDARK from "../assets/htmldark.png"
import CSSLIGHT from "../assets/csslight.png"
import CSSDARK from "../assets/cssdark.png"
import JAVASCRIPTLIGHT from "../assets/javascriptlight.png"
import JAVASCRIPTDARK from "../assets/javascriptdark.png"
import REACTLIGHT from "../assets/reactlight.png"
import REACTDARK from "../assets/reactdark.png"
import NodejsLight from "../assets/nodejslight.png"
import NodejsDark from "../assets/nodejsdark.png"
import JsonLight from "../assets/jsonlight.png"
import JsonDark from "../assets/jsondark.png"
import MongoDBLight from "../assets/mongodblight.png"
import MongoDBDark from "../assets/mongodbdark.png"
import GitLight from "../assets/gitlight.png"
import GitDark from "../assets/gitdark.png"
import PostmanLight from "../assets/postmanlight.png"
import PostmanDark from "../assets/postmandark.png"
import BootstrapLight from "../assets/bootstraplight.png"
import BootstrapDark from "../assets/bootstrapdark.png"
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
  const HTML = theme === 'light' ? HTMLDARK : HTMLLIGHT;
  const CSS = theme === 'light' ? CSSLIGHT : CSSDARK;
  const JS = theme === 'light' ? JAVASCRIPTLIGHT : JAVASCRIPTDARK;
  const REACT = theme === 'light' ? REACTLIGHT : REACTDARK;
  const NodeJS = theme === 'light' ? NodejsLight : NodejsDark;
  const JSON = theme === 'light' ? JsonLight : JsonDark;
  const MONGO = theme === 'light' ? MongoDBLight : MongoDBDark;
  const GIT = theme === 'light' ? GitLight : GitDark;
  const Postman = theme === 'light' ? PostmanLight : PostmanDark;
  const Bootstrap = theme === 'light' ? BootstrapLight : BootstrapDark;
    return (
    <Container>
        <Title>Skills</Title>
      <Wrapper>
        <MySkills src={HTML} skill={"HTML"} />
        <MySkills src={CSS} skill={"CSS"} />
        <MySkills src={JS} skill={"JavaScript"} />
        <MySkills src={REACT} skill={"React JS"} />
      </Wrapper>
        <Hr/>
      <Wrapper>
        <MySkills src={NodeJS} skill={"Node JS"} />
        <MySkills src={CheckMark} skill={"Express"} />
        <MySkills src={JSON} skill={"JSON"} />
        <MySkills src={MONGO} skill={"MongoDB"} />
        <MySkills src={MONGO} skill={"Firebase"} />
      </Wrapper>
        <Hr/>
      <Wrapper>
        <MySkills src={GIT} skill={"Git"} />
        <MySkills src={REACT} skill={"Redux"} />
        <MySkills src={Postman} skill={"Postman"} />
        <MySkills src={Bootstrap} skill={"Bootstrap"} />
      </Wrapper>
    </Container>
  )
}

export default Skills

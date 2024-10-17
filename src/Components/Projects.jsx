import styled from "styled-components";

import CryptoApp from "../assets/cryptoapp.png";
import EcommerceApp from "../assets/ecommerce.png";
import StreamingPlatform from "../assets/streaming_platform.png";
import Salhurry from "../assets/jobfinder.png"

import ProjectCard from "../Common/ProjectCard";

const Container = styled.div`
  //main div
  display: flex;
  flex-direction: column;
  text-align: center;
  
`;
const Wrapper = styled.div`
  //project container
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;

  @media (min-width: 800px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0 60px;
      gap: 40px;
    
  }
  @media (min-width: 1200px) {
      padding: 0 100px; // More padding for wider screens
  }
`;

const Title = styled.h1`
  //section title
  margin-bottom: 30px;
`;

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <Wrapper>
        <ProjectCard
          src={CryptoApp}
          link={"https://github.com/afsalshamsudeen/crypto-app.git"}
          projectname={"Crypto App"}
          desc={"A Crypto price comparison web app."}
        />
        <ProjectCard
          src={EcommerceApp}
          link={"https://github.com/afsalshamsudeen/E-commerce-Website.git"}
          projectname={"E-Commerce Web App"}
          desc={"Shopping Web App with cart."}
        />
        <ProjectCard
          src={StreamingPlatform}
          link={"https://github.com/afsalshamsudeen/streaming-platform.git"}
          projectname={"Streaming Platform"}
          desc={"Video App to Watch videos with your friends."}
        />
        <ProjectCard
          src={Salhurry}
          link={"https://github.com/afsalshamsudeen/salhurry.git"}
          projectname={"Salhurry Job Finder"}
          desc={"A web application for Job seekers and Employers."}
        />
      </Wrapper>
    </Container>
  );
};

export default Projects;

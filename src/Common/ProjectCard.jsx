import styled from "styled-components"
import PropTypes from "prop-types";


const A = styled.a`
    width: fit-content;
    text-decoration: none;
    color: #222;
    transition: transform 200ms ease-in-out;

    &:hover{
        transform: scale(1.05);
    }
`;
const Thumbnail = styled.img`
    //hover
    max-width: 250px;
    align-self: center;
    background-color: var(--project-card-bg);
    border-radius: 20px;
`;
const Projectname = styled.h3`

`;
const Desc = styled.p`

`;

const ProjectCard = ({ src, link, projectname, desc }) => {
  return (
    <A href={link} target="_blank">
            <Thumbnail src={src} alt={`${projectname} logo`}></Thumbnail>
            <Projectname>{projectname}</Projectname>
            <Desc>{desc}</Desc>
        </A>
  )
}


// to fix that error /warning on the props, damn react changed a lot
ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };


export default ProjectCard

import styled from "styled-components";
import PropTypes from "prop-types";

const Span = styled.span` 
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Image = styled.img`
    width: 20px;
`;
const Skill = styled.p`

@media (width >= 800px) {
      font-size: 20px;
    
  }
    
`;

const MySkills = ({src, skill}) => {
  return (
    <Span>
    <Image src={src} alt="checkmark icon"></Image>
    <Skill>{skill}</Skill>
</Span>
  )
}

MySkills.propTypes = {
    src: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
}
export default MySkills

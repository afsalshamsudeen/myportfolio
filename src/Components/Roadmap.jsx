
import styled from 'styled-components';

const RoadmapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Road = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 200px / 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const MilestoneIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.completed ? '#4caf50' : '#ccc')};
  border-radius: 50%;
  position: absolute;
  transition: top 0.5s, left 0.5s;
`;

const MilestoneText = styled.div`
  position: absolute;
  font-size: 1rem;
  color: ${(props) => (props.completed ? '#333' : '#aaa')};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 120px;
  text-align: center;
`;

const Roadmap = () => {
  const milestones = [
    { name: 'Learn HTML/CSS', completed: true, top: 100, left: 100 },
    { name: 'Learn JavaScript', completed: true, top: 50, left: 200 },
    { name: 'Build Portfolio', completed: true, top: 150, left: 300 },
    { name: 'Master React', completed: false, top: 100, left: 400 },
    { name: 'FAANG Interview Prep', completed: false, top: 200, left: 500 },
  ];

  return (
    <RoadmapContainer>
      
      <Road />

      
      {milestones.map((milestone, index) => (
        <div key={index}>
          <MilestoneIcon
            completed={milestone.completed}
            style={{
              top: `${milestone.top - 15}px`,
              left: `${milestone.left - 15}px`,
            }}
          />
          <MilestoneText
            completed={milestone.completed}
            top={milestone.top + 20}
            left={milestone.left - 50}
          >
            {milestone.name}
          </MilestoneText>
        </div>
      ))}
    </RoadmapContainer>
  );
};

export default Roadmap;

import PropTypes from 'prop-types';
import { levels } from "../../Data/Levels";
import './styles.css'

const SkillLevelChart = ({ level }) => {  
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (levels[level] / 100) * circumference;

  return (
    <svg className="skill-chart">
      <circle className="skill-chart-background" cx="50" cy="50" r={radius}/>
      <circle className="skill-chart-progress" cx="50" cy="50" r={radius} 
          strokeDasharray={circumference}   
          strokeDashoffset={circumference - progress}/>
      <text x="50" y="55">{levels[level]}%</text>
    </svg>
  );
};

SkillLevelChart.propTypes = {
  level: PropTypes.string.isRequired,
};

export { SkillLevelChart };
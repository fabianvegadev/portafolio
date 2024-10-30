
const SkillLevelChart = ({ level }) => {
  const levels = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };
  
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (levels[level] / 100) * circumference;
  
    return (
      <svg width="100" height="100" className="skill-chart">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#ddd"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#4caf50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="55" textAnchor="middle" fontSize="16" fill="#333">
          {levels[level]}%
        </text>
      </svg>
    );
  };

export { SkillLevelChart };
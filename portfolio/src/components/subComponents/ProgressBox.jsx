import React from 'react';
import './assets/ProgressBox.css';

const ProgressBox = ({skills , index:ind, name}) => {
  return (
      <div className="profileSkills">
        <div>
          <label for="skill"></label>
          <ul className="skills">
            {skills.map((skill, index) => (
              <li key={index} style={{
                '--per': skill.percentage,
                '--track': `#2292dd40`,
                '--dur': `calc(calc(${skill.percentage} / 100) * 1.5s)`,
                '--skill-percentage': `${skill.percentage}%`,
                '--ind': ind 
              }}>
                <span>{skill.name}</span>
                <style>{`
                  [progress-box="True"]:nth-child(${ind}) ul.skills:before {
                    content: '${name}';
                  }
                  [progress-box="True"]:nth-child(${ind}) ul.skills:hover li:nth-child(${index + 1})::after {
                    width: ${skill.percentage - 1}%;
                  }
                  [progress-box="True"]:nth-child(${ind}) ul.skills li:nth-child(${index + 1})::before {
                    background: linear-gradient(90deg, #2292dd40 ${skill.percentage}%, #1c1c1c ${skill.percentage}%);
                  }
                  [progress-box="True"]:nth-child(${ind}) ul.skills li:nth-child(${index + 1}):hover span:before {
                    right: calc(calc(calc(100 - ${skill.percentage})* 1%) - 12px);
                  }
                  [progress-box="True"]:nth-child(${ind}) ul.skills li:nth-child(${index + 1}) span:after {
                    content: '${skill.percentage}';
                  }
                  [progress-box="True"]:nth-child(${ind}) ul.skills li:nth-child(${index + 1}):hover span:after {
                    right: calc(calc(calc(100 - ${skill.percentage})* 1%) - 40px);
                  }
                `}</style>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default ProgressBox
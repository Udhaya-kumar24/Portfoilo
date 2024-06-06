import React from 'react'
import ProgressBox from './subComponents/ProgressBox'
import ParticlesComponent from './subComponents/Particles';

function Skills(props) {
  const frontendSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 75 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'Tailwind & SCSS', percentage: 80 },
  ];
  
  const backendSkills = [
    { name: 'PHP', percentage: 70 },
    { name: 'Python', percentage: 75 },
    { name: 'PostgreSQL', percentage: 85 },
    { name: 'WordPress', percentage: 85 },
    { name: 'Firebase', percentage: 65 },
    { name: 'Laravel', percentage: 60 },
  ];
  
  const otherSkills = [
    { name: 'Git', percentage: 80 },
    { name: 'jQuery', percentage: 95 },
    { name: 'Cordova & Figma', percentage: 70 },
    { name: 'Metabase', percentage: 55 },
    { name: 'REST API', percentage: 85 },
    { name: 'Agile Methodology', percentage: 60 },
  ];
   
  const arr = [frontendSkills, backendSkills, otherSkills]
  const arr_1 = ['FrontEnd', 'BackEnd', 'Other']
  return (

    <section className='position-relative'>
      <div className={`px-4 ${props.className}`} id={props.id}>
          <ParticlesComponent />
          <div className="row" style={{marginBottom: '6rem'}}>
            <div className="col-12">
              <span className='bg-glossy px-3 py-1 short_name'>SKILLS</span>
              <h1 className='heading-sub mb-0 mt-2'><span className="text-primary">SKILLS</span> I HAVE KNOWN</h1>
            </div>
          </div>
        <div className="row my-4 py-4 align-items-center justify-content-around">
          {
            arr.map((key,val) => {
              return <div className="col-3" progress-box="True" key={val+1}>
              <ProgressBox skills={key}  index={val+1} name={arr_1[val]}/>
            </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
import React from 'react'
import ExperienceBox from './subComponents/ExperienceBox'
import circle from '../images/circle_medium.svg';
// import squareDot from '../images/squareDotSmall.svg';

function Experience(props) {
  const experience = [
    {
      title:"Full Stack Developer",
      exp:"July 2022 - Present",
      language:"HTML, CSS, Javascript, React Js, Jquery, Bootstrap, Python, Django, Postgresql, Sqlite, Cordova, Google Firebase, Figma",
      companyName:"Seewise AI",
      content:"Seewise AI is a web application that enhances safety and efficiency through advanced detection technology. It ensures compliance with Standard Operating Procedures (SOP), monitors Personal Protective Equipment (PPE) usage, oversees the galvanization process, and provides detailed truck analytics. Seewise AI raises timely alerts for any deviations and maintains comprehensive data records, aiding in informed decision-making and continuous improvement.."
    },
    {
      title:"Full Stack Developer",
      exp:"April 2021 - July 2022",
      language:"HTML, CSS, Javascript, React Js, Jquery, Bootstrap, Php, Laravel, Mysql, WordPress, Figma",
      companyName:"Kuruntham International",
      content:"I specialize in WordPress development, creating custom themes and plugins. My work includes React integration with WooCommerce, a gold price updater plugin, and over eight animated themes. I also optimize for SEO to boost search rankings, ensuring enhanced functionality, user engagement, and website aesthetics."
    },
    {
      title:"System Admin",
      exp:"June 2019 - Nov 2020",
      language:"MS Excel, MS Word",
      companyName:"KPR Pvt Ltd",
      content:"I excel in creating purchase orders (POs) for streamlined procurement and maintaining accurate accounts for financial transparency and compliance. My proficiency in these areas highlights my commitment to effective project management and financial administration."
    },
  ]

  return (
    <section className='pb-5 grey-bg position-relative'>
      <div className="effect-1 clockwise">
            <img src={circle} alt="Dot" className='position-absolute right-circle' />
      </div>

      <div className={`px-4 ${props.className}`} id={props.id}>
      <span className='bg-glossy px-3 py-1 short_name'>EXPERIENCE</span>
      {
        experience.map((skill,index) => 
          <ExperienceBox
            key={index}
            title={skill.title}
            exp={skill.exp}
            language={skill.language}
            companyName={skill.companyName}
            content={skill.content}
          />
        )
      }
      </div>

      {/* <div className="">
        <img src={squareDot} alt="Dot" className='position-absolute left-dot' />
      </div> */}

    </section>
  )
}

export default Experience
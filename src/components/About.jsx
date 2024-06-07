import React from 'react'
import circle from '../images/circle_medium.svg';
import mainProfile from '../images/mainProfile.png';
import circle_1 from '../images/circle.svg';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../UdhayResume.pdf'


function About(props) {
  return (
    <section className=''>
      <div className={`px-4 grey-bg ${props.className}`} id={props.id}>
        <div className="row">

          <div className="col-5 position-realtive text-center">
            <div className="frame">
              <img src={mainProfile} alt="" className='radial-bg img-fluid' />
            </div>
            <div className="effect-1 clockwise">
              <img src={circle} alt="Dot" className='position-absolute big-circle' />
            </div>
          </div>


          <div className="col-5">

            <div className="row">
              <div className="col-12">
                <span className='bg-glossy px-3 py-1 short_name'>ABOUT US</span>
                <h3 className='heading-sub mb-0 mt-3'>I'm INTERESTED IN <span className="text-primary">UI DEVELOPMENT</span></h3>
                <p className='about-para'>With over 3 years of hands-on experience in web development, I am proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, ReactJS, React TypeScript, PHP, Python, PostgreSQL, and SQLite. I have successfully developed and maintained multiple web applications, ensuring high performance and responsive design. My experience with modern frameworks like ReactJS and Tailwind allows me to create dynamic and user-friendly interfaces, while my proficiency in back-end technologies such as PHP and Python ensures robust and scalable solutions. I am excited about the opportunity and look forward to contributing to your innovative team.</p>

                <ButtonGroup aria-label="Basic example">
                  <Button variant="primary" className='rounded-pill mr-2 btn-lg' type='button' href={resume} download="UdhayResume.pdf">
                    DOWNLOAD CV
                    <FontAwesomeIcon icon={['fas', 'download']} className='ml-2'/>
                  </Button>
                </ButtonGroup>
              </div>

            </div>



          </div>

          <div className="col-2 position-realtive">
            <div className="effect-1 anti-clockwise">
              <img src={circle_1} alt="Dot" className='position-absolute mid-circle' />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
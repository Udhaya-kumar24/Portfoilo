import React, { useState, useEffect } from 'react';
import squareDot from '../images/squareDot.svg';
import mainProfile from '../images/mainProfile.png';
import Typewriter from 'typewriter-effect';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { SocialIcon } from 'react-social-icons/component';
import { SocialIcon as InstagramIcon } from 'react-social-icons/instagram';
import { SocialIcon as FacebookIcon } from 'react-social-icons/facebook';
import { SocialIcon as LinkedInIcon } from 'react-social-icons/linkedin';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import ScrollAnimation from 'react-animate-on-scroll';
// // import 'animate.css/animate.min.css'; // Import animate.css for pre-built animations
// import "animate.css/animate.compat.css"

library.add(fas);

function Homes(props) {
  const [imageHover, setImageHover] = useState(false);
  return (
    <section className="mx-4">
      <div className={props.className} id={props.id}>
        <div className="row align-items-center mt-5">

          <div className="col-12 col-md-8">
              <span className='bg-glossy px-3 py-1 short_name'>UDHAYA KUMAR</span>
              <h3 className='heading mb-0 mt-2'>I'm Udhay</h3>
              <h3 className='heading d-inline text-primary mb-0'>I'm A <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Front End Developer', 'React Js Developer', 'UI Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}
              />
              </h3>
              <p className='home-para'>Full Stack Developer passionate about learning and working with new technologies. Skilled in building efficient and seamless front-end and back-end solutions, I thrive on creating innovative applications that deliver exceptional user experiences. Always eager to expand my expertise, I stay updated with the latest industry trends and advancements.</p>

              <ButtonGroup aria-label="Basic example">
                <Button variant="primary" className='rounded-pill mr-2 btn-lg'>
                  Get In touch 
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className='ml-2'/>
                </Button>

                <SocialIcon className="mx-1 translate-Y"  url="https://www.linkedin.com/in/udhayakumar1997" />
                <SocialIcon className="mx-1 translate-Y"  url="https://www.instagram.com/call__me__udhay?igsh=MXRsMjU4ZWV5anRqdQ==" />
                <SocialIcon className="mx-1 translate-Y"  url="https://www.facebook.com/udhaya.ronaldo?mibextid=ZbWKwL" />
              </ButtonGroup>
          </div>
        
          <div className="col-12 col-md-4 text-center mt-5 mt-lg-0">
            <div className="position-relative" onMouseOver={() => setImageHover(true)} onMouseOut={() => setImageHover(false)}>
              <img src={mainProfile} alt="Profile" className={`position-absolute img-fluid effect-2 ${imageHover ? 'active' : ''}`} />
              <img src={squareDot} alt="Dot" className={`is-floating-animated-down img-fluid effect-3 ${imageHover ? 'active' : ''}`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Homes;
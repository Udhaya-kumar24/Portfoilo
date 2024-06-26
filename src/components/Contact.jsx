import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import mainProfile from '../images/mainProfile.png';
import { SocialIcon } from 'react-social-icons/component';
import StarCanvas from './subComponents/StarCanvas';
import emailjs from '@emailjs/browser';
import { showToast } from './subComponents/Toasts';
// import { SocialIcon as InstagramIcon } from 'react-social-icons/instagram';
// import { SocialIcon as FacebookIcon } from 'react-social-icons/facebook';
// import { SocialIcon as LinkedInIcon } from 'react-social-icons/linkedin';

function Contact(props) {
	const [validated, setValidated] = useState(false);
	const formRef = useRef()
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = formRef.current;
	
		if (form.checkValidity() === false) {
		  event.stopPropagation();
		} else {
		  emailjs.sendForm('service_wt34cuj', 'template_pmzzgyf', form, 'EyobdK9rK197aGIsY')
			.then(
			  () => {
				showToast('success', 'Email Sended Successfully')
			  },
			  (error) => {
				showToast('error', error.text);
			  }
			);
		}
		setValidated(true);
	  };

	return (
		<section className='position-relative'>
			<StarCanvas />
			<div className={`px-4 position-relative d-flex align-items-center ${props.className}`} id={props.id}>
				<div className="bg-theme-glass container-fluid">
					<div className="row py-4">
						<div className="col-4 d-none d-lg-block">
						</div>
						<div className="col-12 col-lg-6">
							<h1 className='heading-sub mb-0 mt-2'>CONTACT <span className='text-primary'>ME</span></h1>
							<p className='about-para mt-2'>Feel free to contact me for queries!</p>
						</div>
					</div>

					<div className="row grey-bg py-4" style={{ borderRadius: '0px 0px 10px 10px' }}>
						<div className="order-2 order-lg-1 col-12 col-lg-4">
							<img src={mainProfile} alt="" className='position-absolute frame-contact radial-bg d-none d-lg-block' style={{ top: '-35%', left: '15%' }} />

							<div className='contact-div'>

								<div>
									<span className='mail-top'>WRITE AN E-MAIL</span>
									<a href="mailto: udhayakumar.d2401@gmail.com" className='mail-link d-block mb-3'> udhayakumar.d2401@gmail.com </a>
									<span className='mail-top mt-5'>MOBILE NO</span>
									<a href="tel: 90434 97797" className='mail-link d-block'> 90434 97797 </a>

									<SocialIcon className="mx-1 translate-Y" url="https://www.linkedin.com/in/udhayakumar1997" />
									<SocialIcon className="mx-1 translate-Y" url="https://www.instagram.com/call__me__udhay?igsh=MXRsMjU4ZWV5anRqdQ==" />
									<SocialIcon className="mx-1 translate-Y" url="https://www.facebook.com/udhaya.ronaldo?mibextid=ZbWKwL" />
								</div>
							</div>
						</div>
						<div className="order-1 order-lg-2 col-12 col-lg-8 py-1">
							<Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit} >
								<Row className="mb-3 mt-3">
									<Form.Group as={Col} md="6" controlId="validationCustom01">
										<Form.Label>Name</Form.Label>
										<Form.Control
											required
											type="text"
											name="name"
											placeholder="Name"
										/>
										<Form.Control.Feedback>Verified</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md="6" controlId="validationCustom02">
										<Form.Label>E-mail</Form.Label>
										<Form.Control
											required
											type="email"
											name="email"
											placeholder="E-mail"
										/>
										<Form.Control.Feedback>Verified</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">Please provide a validate email.</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Row className="mb-3 mt-2">
									<Form.Group as={Col} md="6" controlId="validationCustom01">
										<Form.Label>Subject</Form.Label>
										<Form.Control
											required
											type="text"
											name="subject"
											placeholder="Subject"
										/>
										<Form.Control.Feedback>Verified</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">Please provide a validate Subject</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md="6" controlId="validationCustom01">
										<Form.Label>Mobile</Form.Label>
										<Form.Control
											required
											type="text"
											name="phone_no"
											placeholder="Phone No."
										/>
										<Form.Control.Feedback>Verified</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">Please provide a validate Mobile No.</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Row className="mb-3 mt-2">
									<Form.Group as={Col} md="12" controlId="validationCustom02">
										<Form.Label>Message</Form.Label>
										<Form.Control
											required
											as="textarea"
											rows={3}
											name="message"
											placeholder="Enter your message"
										/>
										<Form.Control.Feedback>Verified</Form.Control.Feedback>
										<Form.Control.Feedback type="invalid">Please provide a validate message.</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Button type="submit" className='col-12 btn-block rounded-pill mt-4 py-2'>Send Message</Button>
							</Form>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}

export default Contact;
import React from "react";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import AboutSection from "../components/UI/AboutSection/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembers/OurMembers";

import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
		<Helmet title='About'>
			<CommonSection title='About Us' />
			<AboutSection aboutClass='aboutPage' />

			<section className='about__page-section'>
				<Container>
					<Row>
						<Col lg='6' md='6' sm='12'>
							<div className='about__page-img'>
								<img src={driveImg} alt='drive-car' className='w-100 rounded-3' />
							</div>
						</Col>

						<Col lg='6' md='6' sm='12'>
							<div className='about__page-content'>
								<h2 className='section__title'>
									We Are Committed To Provide Safe Ride Solutions
								</h2>
								{['desc-1', 'desc-2'].map((_, index) => {
									return (
										<p className='section__description' key={index}>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Eveniet veniam assumenda aperiam accusantium ex autem
											perferendis repellendus nostrum delectus. Nemo et dolore
											est tempore rem minima adipisci magni dolorum ipsam.
										</p>
									);
								})}

								<div className=' d-flex align-items-center gap-3 mt-4'>
									<span className='fs-4'>
										<i class='ri-phone-line'></i>
									</span>

									<div>
										<h6 className='section__subtitle'>Need Any Help?</h6>
										<h4>+00123456789</h4>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<BecomeDriverSection />

			<section>
				<Container>
					<Row>
						<Col lg='12' className='mb-5 text-center'>
							<h6 className='section__subtitle'>Experts</h6>
							<h2 className='section__title'>Our Members</h2>
						</Col>
						<OurMembers />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default About;
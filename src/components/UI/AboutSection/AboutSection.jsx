import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../../assets/all-images/cars-img/bmw-offer.png";
import "./about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
		<section
			className='about__section'
			style={
				aboutClass === 'aboutPage'
					? { marginTop: '0px' }
					: { marginTop: '280px' }
			}
		>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='about__section-content'>
							<h4 className='section__subtitle'>About Us</h4>
							<h2 className='section__title'>Welcome to drive car service</h2>
							<p className='section__description'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptatum blanditiis esse accusantium dignissimos labore
								laborum. Veniam, corporis mollitia temporibus, in quaerat vero
								deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
								neque sit ad temporibus quam similique dolor ipsam praesentium
								sunt.
							</p>
              {['item-1', 'item-2'].map((_, index) => {
                return (
									<div className='about__section-item d-flex align-items-center' key={index}>
										<p className='section__description d-flex align-items-center gap-2'>
											<i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor
											sit amet.
										</p>

										<p className='section__description d-flex align-items-center gap-2'>
											<i class='ri-checkbox-circle-line'></i> Lorem ipsum dolor
											sit amet.
										</p>
									</div>
								);
              } )}
						</div>
					</Col>

					<Col lg='6' md='6'>
						<div className='about__img'>
							<img src={aboutImg} alt='about' className='w-100' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutSection;

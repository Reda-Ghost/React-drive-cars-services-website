import React from 'react';

import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import './hero-slider.css';

const HeroSlider = () => {
	const settings = {
		fade: true,
		speed: 3000,
		autoplaySpeed: 5000,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
	};

	const sliderItems = ['slider__item-01', 'slider__item-02', 'slider__item-03'];

	return (
		<Slider className='hero__slider' {...settings}>
      {sliderItems.map((item, index) => {
        return (
					<div className={`slider__item ${item} mt0`} key={index}>
						<Container>
							<div className='slider__content'>
								<h4 className='text-light mb-3'>For Driving $70 Per Day</h4>
								<h1 className='text-light mb-4'>Reserve Now and Get 50% Off</h1>

								<button className='btn reserve__btn mt-4'>
									<Link to='/cars'>Reserve Now</Link>
								</button>
							</div>
						</Container>
					</div>
				);
      })}
		</Slider>
	);
};

export default HeroSlider;

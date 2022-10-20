import React from 'react';
import Slider from 'react-slick';

import ava01 from '../../../assets/all-images/ava-1.jpg';
import ava03 from '../../../assets/all-images/ava-3.jpg';
import ava04 from '../../../assets/all-images/ava-4.jpg';
import ava02 from '../../../assets/all-images/ava-2.jpg';
import './testimonial.css';

const CUSTOMERS = [
	{
		name: 'Abraham Dane',
		imgUrl: ava01,
	},

	{
		name: 'David Lisa',
		imgUrl: ava02,
	},

	{
		name: 'Hilton King',
		imgUrl: ava03,
	},

	{
		name: 'Anna Williams',
		imgUrl: ava04,
	},
];

const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 2000,
		swipeToSlide: true,
		autoplaySpeed: 4000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{CUSTOMERS.map(({ name, imgUrl }, index) => {
				return (
					<div className='testimonial py-4 px-3' key={index}>
						<p className='section__description'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							magni explicabo molestias recusandae repudiandae, dolor, sapiente
							placeat ab, animi eum minima nulla facere aliquam aut vitae quo
							pariatur voluptate odit?
						</p>

						<div className='mt-3 d-flex align-items-center gap-4'>
							<img src={imgUrl} alt='user' className='w-25 h-25 rounded-2' />

							<div>
								<h6 className='mb-0 mt-3'>{name}</h6>
								<p className='section__description'>Customer</p>
							</div>
						</div>
					</div>
				);
			})}
		</Slider>
	);
};

export default Testimonial;

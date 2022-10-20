import React from 'react';
import { Col } from 'reactstrap';
import servicesData from '../../../assets/data/serviceData';
import './services-list.css';

const ServicesList = () => {
	return (
		<>
			{servicesData.map((item) => (
				<ServiceItem key={item.id} {...item} />
			))}
		</>
	);
};

const ServiceItem = ({ icon, title, desc }) => (
	<Col lg='4' md='4' sm='6' className='mb-3'>
		<div className='service__item'>
			<span className='mb-3 d-inline-block'>
				<i class={icon} />
			</span>
			<h6>{title}</h6>
			<p className='section__description'>{desc}</p>
		</div>
	</Col>
);

export default ServicesList;

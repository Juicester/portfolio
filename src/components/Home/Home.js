import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Recent from '../Recent/Recent';
import Image from 'react-bootstrap/Image';
import DeviceSet from '../../images/ElectronicDeviceSet.png';

function Home() {
	return (
		<div className='outer-home'>
			<h1 className='title-words'>
				Welcome to my digital portfolio! I'm Justin
			</h1>
			<h4 className='sub-words'>
				I design and code web applications, video games and love what I do.
			</h4>
			<Image src={DeviceSet} style={{ width: '22rem' }} fluid />
			<About />
			<Skills />
			<Recent />
			<Projects />
		</div>
	);
}

export default Home;

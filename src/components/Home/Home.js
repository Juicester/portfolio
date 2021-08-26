import React from 'react';
import './Home.css';
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
				Welcome to my digital portfolio, I'm Justin!
			</h1>
			<h4 className='sub-words'>
				I design and code web applications and video games
			</h4>
			<Image
				src={DeviceSet}
				style={{ width: '22rem' }}
				fluid
				className='home-image'
			/>
			<h5 className='bottom-home-text'>
				I am a recent graduate from General Assembly, have a B.S. in Computer
				Science from Adelphi University, and am a developer and technical
				advisor for Empava. Please peruse my portfolio; you can find my vast
				array of projects spanning web development to video games below.
			</h5>
			<Skills />
			<Recent />
			<About />
			<Projects />
		</div>
	);
}

export default Home;

import React from 'react';
import Button from 'react-bootstrap/Button';
import ModalAbout from '../ModalAbout/ModalAbout';
import './About.css';

function About() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className='about-container'>
			<Button
				className='modal-button'
				variant='primary'
				onClick={() => setModalShow(true)}>
				About Me
			</Button>
			<ModalAbout show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
}

export default About;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
	return (
		<Container fluid className='footer'>
			<Row className='footer-upper-text'>
				<Col>
					<h5>My Links</h5>
				</Col>
			</Row>
			<Row className='footer-button-row'>
				<ButtonGroup className='footer-button-group'>
					<Link
						to={{
							pathname: 'https://www.linkedin.com/in/justinpedowitz/',
						}}
						target='_blank'
						className='linkedin'>
						<Linkedin size={40} />
					</Link>
					<Link
						to={{
							pathname: 'https://github.com/Juicester',
						}}
						target='_blank'
						className='github'>
						<Github size={40} />
					</Link>
				</ButtonGroup>
			</Row>
			<Row className='footer-text-row'>
				<h4>Handmade by me ©2021</h4>
			</Row>
			<Row className='footer-text-row'>
				<p>Made with React.js, HTML, and CSS</p>
			</Row>
		</Container>
	);
}

export default Footer;

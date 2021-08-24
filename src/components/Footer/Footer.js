import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
	return (
		<Container fluid className='footer'>
			<Row className='footer-button-row'>
				<Col className='linkedin'>
					<Link
						to={{
							pathname: 'https://www.linkedin.com/in/justinpedowitz/',
						}}
						target='_blank'>
						<Linkedin size={40} />
					</Link>
				</Col>
				<Col className='github'>
					<Link
						to={{
							pathname: 'https://github.com/Juicester',
						}}
						target='_blank'>
						<Github size={40} />
					</Link>
				</Col>
			</Row>
			<Row className='footer-text-row'>
				<h4>Handmade by me ©2021</h4>
			</Row>
			<Row className='footer-text-row'>
				<p>Made with React, Bootstrap, CSS</p>
			</Row>
		</Container>
	);
}

export default Footer;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
	return (
		<Container fluid className='footer'>
			<Row>
				<Col className='linkedin'>
					<Link to={'https://www.linkedin.com/in/justinpedowitz/'}>
						<Linkedin size={70} />
					</Link>
				</Col>
				<Col className='github'>
					<Link to={'https://github.com/Juicester'}>
						<Github size={70} />
					</Link>
				</Col>
			</Row>
			<Row>
				<h4>Handmade by me ©2021</h4>
			</Row>
			<Row>
				<h5>Made with React, Bootstrap, CSS</h5>
			</Row>
		</Container>
	);
}

export default Footer;

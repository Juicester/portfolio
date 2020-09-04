import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

function Footer() {
	return (
		<Container className='container-fluid d-flex justify-content-center footer'>
			{/* <Row>
					<Col>
						<h3>This is the Footer Component</h3>
					</Col>
				</Row> */}
			<Row>
				<Col md='auto'>
					<Link to={'https://www.linkedin.com/in/justinpedowitz/'}>
						<SocialIcon url='https://www.linkedin.com/in/justinpedowitz/' />
					</Link>
				</Col>
				<Col>
					<Link to={'https://www.instagram.com/'}>
						<SocialIcon url='https://www.instagram.com/' />
					</Link>
				</Col>
				<Col>
					<Link to={'https://github.com/Juicester'}>
						<SocialIcon url='https://github.com/Juicester' />
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;

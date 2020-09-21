import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';

function Projects() {
	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container>
				<Row className='row1'>
					<Col className='proj1'>
						<Card>
							<Card.Title>Project 1</Card.Title>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card>
							<Card.Title>Project 2</Card.Title>
						</Card>
					</Col>
					<Col className='proj3'>
						<Card>
							<Card.Title>Project 3</Card.Title>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Card>
							<Card.Title>Project 4</Card.Title>
						</Card>
					</Col>
					<Col className='proj5'>
						<Card>
							<Card.Title>Project 5</Card.Title>
						</Card>
					</Col>
					<Col className='proj6'>
						<Card>
							<Card.Title>Project 6</Card.Title>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Projects;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Projects() {
	return (
		<div>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					<Col>
						<Card>
							<Card.Title>Project 1</Card.Title>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Title>Project 2</Card.Title>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Title>Project 3</Card.Title>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<Card.Title>Project 4</Card.Title>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Title>Project 5</Card.Title>
						</Card>
					</Col>
					<Col>
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

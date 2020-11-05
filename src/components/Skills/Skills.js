import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function Skills() {
	return (
		<div>
			<Container>
				<h1>Skillzzzz</h1>
				<Row>
					<Col className='skills-col-1'>
						<Card>
							<Card.Header>Designer</Card.Header>
							<Card.Title>Image goes here</Card.Title>
							<Card.Text>Some more words here to describe</Card.Text>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Unity</ListGroupItem>
								<ListGroupItem>Maya</ListGroupItem>
								<ListGroupItem>Photoshop</ListGroupItem>
							</ListGroup>
						</Card>
					</Col>
					<Col className='skills-col-2'>
						<Card>
							<Card.Header>Full Stack Developer</Card.Header>
							<Card.Title>Image goes here</Card.Title>
							<Card.Text>Some more words here to describe</Card.Text>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>React</ListGroupItem>
								<ListGroupItem>Javascript</ListGroupItem>
								<ListGroupItem>CSS</ListGroupItem>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Skills;

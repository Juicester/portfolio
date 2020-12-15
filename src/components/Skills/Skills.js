import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './Skills.css';

function Skills() {
	return (
		<div>
			<Container>
				<h1>Skillzzzz</h1>
				<CardGroup>
					<Card className='skills-card'>
						<Card.Header>Technical Tools & Skills</Card.Header>
						<Card.Title>Image goes here</Card.Title>
						<ListGroup className='list-group-flush'>
							<ListGroupItem>Unity</ListGroupItem>
							<ListGroupItem variant='dark'>Git</ListGroupItem>
							<ListGroupItem>PostgreSQL</ListGroupItem>
							<ListGroupItem variant='dark'>MongoDB</ListGroupItem>
							<ListGroupItem>Word Press</ListGroupItem>
							<ListGroupItem variant='dark'>Squarespace</ListGroupItem>
							<ListGroupItem>SketchUp</ListGroupItem>
							<ListGroupItem variant='dark'>Blender</ListGroupItem>
							<ListGroupItem>Maya</ListGroupItem>
						</ListGroup>
					</Card>
					<Card className='skills-card'>
						<Card.Header>Languages & Libraries</Card.Header>
						<Card.Title>Image goes here</Card.Title>
						<ListGroup className='list-group-flush'>
							<ListGroupItem variant='dark'>React</ListGroupItem>
							<ListGroupItem>Javascript</ListGroupItem>
							<ListGroupItem variant='dark'>CSS</ListGroupItem>
							<ListGroupItem>HTML</ListGroupItem>
							</ListGroup>
							<ListGroupItem variant='dark'>Python</ListGroupItem>
							<ListGroupItem>SQL</ListGroupItem>
							<ListGroupItem variant='dark'>Django</ListGroupItem>
							<ListGroupItem>C#</ListGroupItem>
							<ListGroupItem variant='dark'>Powershell</ListGroupItem>
						</Card>
				</CardGroup>
			</Container>
		</div>
	);
}

export default Skills;

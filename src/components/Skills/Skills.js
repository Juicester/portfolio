import React from 'react';
import { CardColumns, CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './Skills.css';
import { KeyboardFill, CodeSlash } from 'react-bootstrap-icons';

function Skills() {
	return (
		<div>
			<Container className='skills-card-outer'>
				<h1> My Skills</h1>
				<CardGroup>
					<Card className='skills-card'>
						<Card.Header>Technical Tools & Skills</Card.Header>
						<KeyboardFill size={50} className='skill-icon' />
						<ListGroup variant='flush'>
							<ListGroupItem>Unity</ListGroupItem>
							<ListGroupItem>Git</ListGroupItem>
							<ListGroupItem>AWS</ListGroupItem>
							<ListGroupItem>PostgreSQL</ListGroupItem>
							<ListGroupItem>MongoDB</ListGroupItem>
							<ListGroupItem>Word Press</ListGroupItem>
							<ListGroupItem>SquareSpace</ListGroupItem>
							<ListGroupItem>SketchUp</ListGroupItem>
							<ListGroupItem>Blender</ListGroupItem>
							<ListGroupItem>Maya</ListGroupItem>
						</ListGroup>
					</Card>
					<Card className='skills-card'>
						<Card.Header>Languages & Libraries</Card.Header>
						<CodeSlash size={40} className='skill-icon' />
						<ListGroup variant='flush'>
							<ListGroupItem>React</ListGroupItem>
							<ListGroupItem>Javascript</ListGroupItem>
							<ListGroupItem>CSS</ListGroupItem>
							<ListGroupItem>HTML</ListGroupItem>
							<ListGroupItem>Python</ListGroupItem>
							<ListGroupItem>SQL</ListGroupItem>
							<ListGroupItem>GraphQL</ListGroupItem>
							<ListGroupItem>Django</ListGroupItem>
							<ListGroupItem>C#</ListGroupItem>
							<ListGroupItem>Powershell</ListGroupItem>
						</ListGroup>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
}

export default Skills;

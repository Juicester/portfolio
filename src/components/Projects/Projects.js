import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import Maze from '../../images/Maze.png'
import AdelphiMap from '../../images/startscreen-adelphi.png'
import Knockdown from '../../images/Knockdown.png'
import Terrain from '../../images/Terrain.png'
import Galaxor from '../../images/Galaxor.png'
import SpiritBomb from '../../images/spiritbomb.png'
import Rubiks from '../../images/rubicscube2.png'

function Projects() {
	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container>
				<h1>My Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html'}} target='_blank'>
								<Card.Title>Project 1</Card.Title>
								<Card.Img src={Maze}/>
							</Link>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card>
							<Card.Title>Project 2</Card.Title>
							<Card.Img src={AdelphiMap}/>
						</Card>
					</Col>
					<Col className='proj3'>
						<Card>
							<Card.Title>Project 3</Card.Title>
							<Card.Img src={Knockdown}/>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Card>
							<Card.Title>Project 4</Card.Title>
							<Card.Img src={Terrain}/>
						</Card>
					</Col>
					<Col className='proj5'>
						<Card>
							<Card.Title>Project 5</Card.Title>
							<Card.Img src={Galaxor}/>
						</Card>
					</Col>
					<Col className='proj6'>
						<Card>
							<Card.Title>Project 6</Card.Title>
							<Card.Img src={SpiritBomb}/>
						</Card>
					</Col>
				</Row>
				<Row className='row3'>
					<Col className='proj7'>
						<Card>
							<Card.Title>Project 7</Card.Title>
							<Card.Img src={Rubiks}/>
						</Card>
					</Col>
					
				</Row>
			</Container>
		</div>
	);
}

export default Projects;

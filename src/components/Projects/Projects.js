import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import Maze from '../../images/Maze.png';
import AdelphiMap from '../../images/startscreen-adelphi.png';
import Knockdown from '../../images/Knockdown.png';
import Terrain from '../../images/Terrain.png';
import Galaxor from '../../images/Galaxor.png';
import SpiritBomb from '../../images/spiritbomb.png';
import Rubics from '../../images/rubicscube2.png';

function Projects() {
	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container>
				<h1>Previous Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html',
								}}
								target='_blank'>
								<Card.Title>Maze</Card.Title>
								<Card.Img src={Maze} />
							</Link>
							<Card.Text className='project-card-text'>
								Maze is a Unity game where you need to find your way through a
								maze to the exit! To play, use the mouse to look around and 'W',
								'A', 'S', and 'D' to move.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card className='project-card'>
							<Link
								to={{
									pathname: 'https://home.adelphi.edu/~ju21229/AU3DMap.html',
								}}
								target='_blank'>
								<Card.Title>AU 3D Map</Card.Title>
								<Card.Img src={AdelphiMap} />
							</Link>
							<Card.Text className='project-card-text'>
								My capstone project, a 3D Map of my university. All aspects of
								the project were made in Unity, SketchUp and Blender.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj3'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html',
								}}
								target='_blank'>
								<Card.Title>Knockdown</Card.Title>
								<Card.Img src={Knockdown} />
							</Link>
							<Card.Text className='project-card-text'>
								Knockdown is a Unity game where you have to launch the ball from
								the slingshot into the star. To play, mouse over the slingshot,
								click and drag to move the ball and release to send it flying.
								Knockdown is based on Angry Birds.
							</Card.Text>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html',
								}}
								target='_blank'>
								<Card.Title>Terrain</Card.Title>
								<Card.Img src={Terrain} />
							</Link>
							<Card.Text className='project-card-text'>
								Terrain is a Unity game used to show off our terrain building
								skills. To play, use the mouse to look around and 'W', 'A', 'S',
								and 'D' to move.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj5'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/galaxor_html/Galaxor.html',
								}}
								target='_blank'>
								<Card.Title>Galaxor</Card.Title>
								<Card.Img src={Galaxor} />
							</Link>
							<Card.Text className='project-card-text'>
								Galxor is a Unity game based on Galaga, where you have to shoot
								enemies while dodging their bullets. To play, use 'W', 'A', 'S'
								and 'D' to move and 'Spacebar' to shoot.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj6'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/Spirit_Bomb/Final_Stuff/SpiritBomb.html',
								}}
								target='_blank'>
								<Card.Title>Spirit Bomb</Card.Title>
								<Card.Img src={SpiritBomb} />
							</Link>
							<Card.Text className='project-card-text'>
								Spirit Bomb is a 3D Graphics example of custom shaders, scenes,
								and an imported model using Three.js. It depicts goku from
								Dragonball Z with a pulsing orb over his head.
							</Card.Text>
						</Card>
					</Col>
				</Row>
				<Row className='row3'>
					<Col className='proj7'>
						<Card className='project-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/Rubics_Cube/RubicsCube.html',
								}}
								target='_blank'>
								<Card.Title>Rubic's Cube</Card.Title>
								<Card.Img src={Rubics} />
							</Link>
							<Card.Text className='project-card-text'>
								This Rubics Cube is the first real 3D Graphics example of any
								significance that I made. It is a rotating Rubics Cube.
							</Card.Text>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Projects;

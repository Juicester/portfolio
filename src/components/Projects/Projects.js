import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import Maze from '../../images/1920x1080/Maze_1920x1080.png';
import AdelphiMap from '../../images/1920x1080/StartScreen_Adelphi_1920x1080.png';
import Knockdown from '../../images/1920x1080/Knockdown_1920x1080.png';
import Terrain from '../../images/1920x1080/Terrain_1920x1080.png';
import Galaxor from '../../images/1920x1080/Galaxor_1920x1080.png';
import SpiritBomb from '../../images/1920x1080/spiritbomb_1920x1080.png';
import Rubics from '../../images/1920x1080/rubicscube2_1920x1080.png';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

function Projects() {

	const [isFlipped1, setFlipped1] = useState(false);
	const [isFlipped2, setFlipped2] = useState(false);
	const [isFlipped3, setFlipped3] = useState(false);
	const [isFlipped4, setFlipped4] = useState(false);
	const [isFlipped5, setFlipped5] = useState(false);
	const [isFlipped6, setFlipped6] = useState(false);
	const [isFlipped7, setFlipped7] = useState(false);

	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container>
				<h1>Previous Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped1} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped1(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Maze is a Unity game where you need to find your way through
										a maze to the exit! To play, use the mouse to look around
										and 'W', 'A', 'S', and 'D' to move.
									</Card.Text>
									<button onClick={() => setFlipped1(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
					<Col className='proj2'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped2} flipDirection='horizontal'>
								<Card className='project-card'>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/AU3DMap.html',
										}}
										target='_blank'>
										<Card.Title>AU 3D Map</Card.Title>
										<Card.Img src={AdelphiMap} />
									</Link>
									<button onClick={() => setFlipped2(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										My capstone project, a 3D Map of my university. All aspects
										of the project were made in Unity, SketchUp and Blender.
									</Card.Text>
									<button onClick={() => setFlipped2(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
					<Col className='proj3'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped3} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped3(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Knockdown is a Unity game where you have to launch the ball
										from the slingshot into the star. To play, mouse over the
										slingshot, click and drag to move the ball and release to
										send it flying. Knockdown is based on Angry Birds.
									</Card.Text>
									<button onClick={() => setFlipped3(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped4} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped4(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Terrain is a Unity game used to show off our terrain
										building skills. To play, use the mouse to look around and
										'W', 'A', 'S', and 'D' to move.
									</Card.Text>
									<button onClick={() => setFlipped4(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
					<Col className='proj5'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped5} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped5(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Galxor is a Unity game based on Galaga, where you have to
										shoot enemies while dodging their bullets. To play, use 'W',
										'A', 'S' and 'D' to move and 'Spacebar' to shoot.
									</Card.Text>
									<button onClick={() => setFlipped5(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
					<Col className='proj6'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped6} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped6(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Spirit Bomb is a 3D Graphics example of custom shaders,
										scenes, and an imported model using Three.js. It depicts
										goku from Dragonball Z with a pulsing orb over his head.
									</Card.Text>
									<button onClick={() => setFlipped6(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
				</Row>
				<Row className='row3'>
					<Col className='proj7'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped7} flipDirection='horizontal'>
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
									<button onClick={() => setFlipped7(true)}>
										Click to Flip
									</button>
								</Card>
								<Card className='project-card'>
									<Card.Text>
										This Rubics Cube is the first real 3D Graphics example of
										any significance that I made. It is a rotating Rubics Cube.
									</Card.Text>
									<button onClick={() => setFlipped7(false)}>
										Click to Flip
									</button>
								</Card>
							</ReactCardFlip>
						</Tilt>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Projects;

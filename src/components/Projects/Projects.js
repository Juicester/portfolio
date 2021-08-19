import React, { useState } from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
import Rubics from '../../images/1920x1080/rubicscube2_1920x1080.png';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

function Projects() {
	const [isFlipped1, setFlipped1] = useState(false);
	const [isFlipped2, setFlipped2] = useState(false);
	const [isFlipped3, setFlipped3] = useState(false);
	const [isFlipped4, setFlipped4] = useState(false);
	const [isFlipped5, setFlipped5] = useState(false);
	// const [isFlipped6, setFlipped6] = useState(false);
	const [isFlipped7, setFlipped7] = useState(false);

	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			Click to Flip for More Information and Link to the Project
		</Tooltip>
	);

	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container fluid className='outer-container'>
				<h1 className='projects-title'>Adelphi Projects</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped1}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped1(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												Maze
											</Card.Title>
											<Card.Img src={Maze} />
										</Card>
										<Card
											onClick={() => setFlipped1(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												Maze
											</Card.Title>
											<Card.Text>
												Maze is a Unity game where you need to find your way
												through a maze to the exit! To play, use the mouse to
												look around and 'W', 'A', 'S', and 'D' to move.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html',
												}}
												target='_blank'>
												Click For Demo
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
					<Col className='proj2'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped2}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped2(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												AU 3D Map
											</Card.Title>
											<Card.Img src={AdelphiMap} />
										</Card>
										<Card
											onClick={() => setFlipped2(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												AU 3D Map
											</Card.Title>
											<Card.Text>
												My capstone project, a 3D Map of my university. All
												aspects of the project were made in Unity, SketchUp and
												Blender.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/AU3DMap.html',
												}}
												target='_blank'></Link>
											<button>Click to Flip</button>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
					<Col className='proj3'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped3}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped3(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												Knockdown
											</Card.Title>
											<Card.Img src={Knockdown} />
										</Card>
										<Card
											onClick={() => setFlipped3(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												Knockdown
											</Card.Title>
											<Card.Text>
												Knockdown is a Unity game where you have to launch the
												ball from the slingshot into the star. To play, mouse
												over the slingshot, click and drag to move the ball and
												release to send it flying. Knockdown is based on Angry
												Birds.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html',
												}}
												target='_blank'>
												Click For Demo
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped4}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped4(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												Terrain
											</Card.Title>
											<Card.Img src={Terrain} />
										</Card>
										<Card
											onClick={() => setFlipped4(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												Terrain
											</Card.Title>
											<Card.Text>
												Terrain is a Unity game used to show off our terrain
												building skills. To play, use the mouse to look around
												and 'W', 'A', 'S', and 'D' to move.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html',
												}}
												target='_blank'>
												Click For Demo
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
					<Col className='proj5'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped5}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped5(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												Galaxor
											</Card.Title>
											<Card.Img src={Galaxor} />
										</Card>
										<Card
											onClick={() => setFlipped5(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												Galaxor
											</Card.Title>
											<Card.Text>
												Galxor is a Unity game based on Galaga, where you have
												to shoot enemies while dodging their bullets. To play,
												use 'W', 'A', 'S' and 'D' to move and 'Spacebar' to
												shoot.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/assets/galaxor_html/Galaxor.html',
												}}
												target='_blank'>
												Click For Demo
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
					<Col className='proj6'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped7}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped7(true)}
											className='previous-card-front'>
											<Card.Title className='projects-card-title'>
												Rubic's Cube
											</Card.Title>
											<Card.Img src={Rubics} />
										</Card>
										<Card
											onClick={() => setFlipped7(false)}
											className='previous-card-back'>
											<Card.Title className='projects-card-title'>
												Rubic's Cube
											</Card.Title>
											<Card.Text>
												This Rubics Cube is the first real 3D Graphics example
												of any significance that I made. It is a rotating Rubics
												Cube.
											</Card.Text>
											<Link
												to={{
													pathname:
														'https://home.adelphi.edu/~ju21229/assets/Rubics_Cube/RubicsCube.html',
												}}
												target='_blank'>
												Click For Demo
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Projects;

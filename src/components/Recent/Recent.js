import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Recent.css';
import NFLAnalysis from '../../images/1920x1080/NFLAnalysisApp_1920x1080.png';
import PathfinderStore from '../../images/1920x1080/PathfinderHome_1920x1080.png';
import HallofGames from '../../images/1920x1080/HallOfGames_1920x1080.png';
import Hangman from '../../images/1920x1080/Hangman_1920x1080.png';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

function Recent() {

	const [isFlipped1, setFlipped1] = useState(false);
	const [isFlipped2, setFlipped2] = useState(false);
	const [isFlipped3, setFlipped3] = useState(false);
	const [isFlipped4, setFlipped4] = useState(false);
	const [isFlipped5, setFlipped5] = useState(false);

	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container className='outer-recent'>
				<h1>Recent Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
							<ReactCardFlip isFlipped={isFlipped1} flipDirection='horizontal'>
								<Card className='recent-card'>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html',
										}}
										target='_blank'>
										<Card.Title>NFL Analysis App</Card.Title>
										<Card.Img src={NFLAnalysis} />
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
								<Card className='recent-card'>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/AU3DMap.html',
										}}
										target='_blank'>
										<Card.Title>Pathfinder Store</Card.Title>
										<Card.Img src={PathfinderStore} />
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
								<Card className='recent-card'>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html',
										}}
										target='_blank'>
										<Card.Title>Hall of Games</Card.Title>
										<Card.Img src={HallofGames} />
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
								<Card>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html',
										}}
										target='_blank'>
										<Card.Title>Hangman</Card.Title>
										<Card.Img src={Hangman} />
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
								<Card>
									<Link
										to={{
											pathname:
												'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html',
										}}
										target='_blank'>
										<Card.Title>Hall of Games</Card.Title>
										<Card.Img src={HallofGames} />
									</Link>
									<button onClick={() => setFlipped5(true)}>
										Click to Flip
									</button>
								</Card>
								<Card>
									<Card.Text>
										Terrain is a Unity game used to show off our terrain
										building skills. To play, use the mouse to look around and
										'W', 'A', 'S', and 'D' to move.
									</Card.Text>
									<button onClick={() => setFlipped5(false)}>
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

export default Recent;

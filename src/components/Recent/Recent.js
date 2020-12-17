import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Recent.css';
import NFLAnalysis from '../../images/NFLAnalysisApp.png';
import PathfinderStore from '../../images/pathfinderhomepage.png';
import HallofGames from '../../images/HallOfGames.png';
import Hangman from '../../images/hangman.jpeg';

function Recent() {
	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container className='outer-recent'>
				<h1>Recent Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
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
							<Card.Text>
								Maze is a Unity game where you need to find your way through a
								maze to the exit! To play, use the mouse to look around and 'W',
								'A', 'S', and 'D' to move.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card className='recent-card'>
							<Link
								to={{
									pathname: 'https://home.adelphi.edu/~ju21229/AU3DMap.html',
								}}
								target='_blank'>
								<Card.Title>Pathfinder Store</Card.Title>
								<Card.Img src={PathfinderStore} />
							</Link>
							<Card.Text>
								My capstone project, a 3D Map of my university. All aspects of
								the project were made in Unity, SketchUp and Blender.
							</Card.Text>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj3'>
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
							<Card.Text>
								Knockdown is a Unity game where you have to launch the ball from
								the slingshot into the star. To play, mouse over the slingshot,
								click and drag to move the ball and release to send it flying.
								Knockdown is based on Angry Birds.
							</Card.Text>
						</Card>
					</Col>
					<Col className='proj4'>
						<Card className='recent-card'>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html',
								}}
								target='_blank'>
								<Card.Title>Hangman</Card.Title>
								<Card.Img src={Hangman} />
							</Link>
							<Card.Text>
								Terrain is a Unity game used to show off our terrain building
								skills. To play, use the mouse to look around and 'W', 'A', 'S',
								and 'D' to move.
							</Card.Text>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Recent;

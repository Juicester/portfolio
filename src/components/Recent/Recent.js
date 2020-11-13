import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Recent.css';
import Maze from '../../images/Maze.png';
import AdelphiMap from '../../images/startscreen-adelphi.png';
import Knockdown from '../../images/Knockdown.png';
import Terrain from '../../images/Terrain.png';
import Galaxor from '../../images/Galaxor.png';

function Recent() {
	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container>
				<h1>Recent Work</h1>
				<Row className='row1'>
					<Col className='proj1'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html'}} target='_blank'>
								<Card.Title>Maze</Card.Title>
								<Card.Img src={Maze}/>
							</Link>
							<Card.Text>Maze is a Unity game where you need to find your way through a maze to the exit! To play, use the mouse to look around and 'W', 'A', 'S', and 'D' to move.</Card.Text>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/AU3DMap.html'}} target='_blank'>
							<Card.Title>AU 3D Map</Card.Title>
							<Card.Img src={AdelphiMap}/>
							</Link>
							<Card.Text>My capstone project, a 3D Map of my university. All aspects of the project were made in Unity, SketchUp and Blender.</Card.Text>
						</Card>
					</Col>
					<Col className='proj3'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html'}} target='_blank'>
							<Card.Title>Knockdown</Card.Title>
							<Card.Img src={Knockdown}/>
							</Link>
							<Card.Text>Knockdown is a Unity game where you have to launch the ball from the slingshot into the star. To play, mouse over the slingshot, click and drag to move the ball and release to send it flying. Knockdown is based on Angry Birds.</Card.Text>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html'}} target='_blank'>
							<Card.Title>Terrain</Card.Title>
							<Card.Img src={Terrain}/>
							</Link>
							<Card.Text>Terrain is a Unity game used to show off our terrain building skills. To play, use the mouse to look around and 'W', 'A', 'S', and 'D' to move.</Card.Text>
						</Card>
					</Col>
					<Col className='proj5'>
						<Card>
							<Link to={{ pathname: 'https://home.adelphi.edu/~ju21229/assets/galaxor_html/Galaxor.html'}} target='_blank'>
							<Card.Title>Galaxor</Card.Title>
							<Card.Img src={Galaxor}/>
							</Link>
							<Card.Text>Galxor is a Unity game based on Galaga, where you have to shoot enemies while dodging their bullets. To play, use 'W', 'A', 'S' and 'D' to move and 'Spacebar' to shoot.</Card.Text>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Recent;

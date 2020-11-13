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
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/maze_html/Maze.html',
								}}
								target='_blank'>
								<Card.Title>Project 1</Card.Title>
								<Card.Img src={Maze} />
							</Link>
						</Card>
					</Col>
					<Col className='proj2'>
						<Card>
							<Link
								to={{
									pathname: 'https://home.adelphi.edu/~ju21229/AU3DMap.html',
								}}
								target='_blank'>
								<Card.Title>Project 2</Card.Title>
								<Card.Img src={AdelphiMap} />
							</Link>
						</Card>
					</Col>
					<Col className='proj3'>
						<Card>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/knockdown_html/knockdown.html',
								}}
								target='_blank'>
								<Card.Title>Project 3</Card.Title>
								<Card.Img src={Knockdown} />
							</Link>
						</Card>
					</Col>
				</Row>
				<Row className='row2'>
					<Col className='proj4'>
						<Card>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/terrain_html/Terrain.html',
								}}
								target='_blank'>
								<Card.Title>Project 4</Card.Title>
								<Card.Img src={Terrain} />
							</Link>
						</Card>
					</Col>
					<Col className='proj5'>
						<Card>
							<Link
								to={{
									pathname:
										'https://home.adelphi.edu/~ju21229/assets/galaxor_html/Galaxor.html',
								}}
								target='_blank'>
								<Card.Title>Project 5</Card.Title>
								<Card.Img src={Galaxor} />
							</Link>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Recent;

import React, { useState } from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Recent.css';
import NFLAnalysis from '../../images/1920x1080/NFLAnalysisApp_1920x1080.png';
import PathfinderStore from '../../images/1920x1080/PathfinderHome_1920x1080.png';
import HallofGames from '../../images/1920x1080/HallOfGames_1920x1080.png';
import Hangman from '../../images/1920x1080/Hangman_1920x1080.png';
import Empava from '../../images/1920x1080/Empava_Insight.png';
import CT from '../../images/1920x1080/CT.png';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

function Recent() {
	const [isFlipped1, setFlipped1] = useState(false);
	const [isFlipped2, setFlipped2] = useState(false);
	const [isFlipped3, setFlipped3] = useState(false);
	const [isFlipped4, setFlipped4] = useState(false);
	const [isFlipped5, setFlipped5] = useState(false);
	const [isFlipped6, setFlipped6] = useState(false);

	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			Click to Flip for More Information and Link to the Project
		</Tooltip>
	);

	return (
		<div>
			{/* <Container className='container-fluid d-flex justify-content-center'> */}
			<Container fluid className='outer-recent'>
				<h1 className='recent-title'>Recent Work and General Assembly</h1>
				<Row className='row1'>
					<Col className='proj6'>
						<OverlayTrigger
							placement='top'
							delay={{ show: 200, hide: 200 }}
							overlay={renderTooltip}>
							<div>
								<Tilt tiltMaxAngleX='5' tiltMaxAngleY='5'>
									<ReactCardFlip
										isFlipped={isFlipped6}
										flipDirection='horizontal'>
										<Card
											onClick={() => setFlipped6(true)}
											className='recent-card-front'>
											<Card.Title className='recent-card-title'>
												Empava
											</Card.Title>
											<Card.Img src={Empava} />
										</Card>
										<Card
											onClick={() => setFlipped6(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												Empava
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												Empava is a start up which improves efficiency of sales
												teams, increases throughput of sales opportunities and
												strengthens customer retention via gamification of
												Salesforce.com data
											</Card.Text>
											<Link
												to={{
													pathname: 'https://www.empava.io/',
												}}
												target='_blank'>
												Empava
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
											className='recent-card-front'>
											<Card.Title className='recent-card-title'>
												Crossing Thresholds
											</Card.Title>
											<Card.Img src={CT} />
										</Card>
										<Card
											onClick={() => setFlipped5(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												Crossing Thresholds
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												Crossing Thresholds is a non-profit organization that
												has built 4 primary schools and one high school in
												Kenya. In total, they are now feeding and educating
												approximately 1500 children.
											</Card.Text>
											<Link
												to={{
													pathname: 'https://www.crossingthresholds.org/',
												}}
												target='_blank'>
												Crossing Thresholds
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
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
											className='recent-card-front'
											onClick={() => setFlipped1(true)}>
											<Card.Title className='recent-card-title'>
												NFL Analysis App
											</Card.Title>
											<Card.Img src={NFLAnalysis} />
										</Card>
										<Card
											onClick={() => setFlipped1(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												NFL Analysis App
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												This app, developed when I was at General Assembly, is a
												full-stack web application designed to visualize and
												compare key performance statistics and trends for NFL
												teams
											</Card.Text>
											<Link
												to={{
													pathname: 'https://nflanalysis.herokuapp.com/',
												}}
												target='_blank'>
												NFL Analysis App
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row className='row2'>
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
											className='recent-card-front'
											onClick={() => setFlipped2(true)}>
											<Card.Title className='recent-card-title'>
												Pathfinder Store
											</Card.Title>
											<Card.Img src={PathfinderStore} />
										</Card>
										<Card
											onClick={() => setFlipped2(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												Pathfinder Store
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												This app, developed when I was at General Assembly, is a
												full-stack application to improve inventory experience
												for Pathfinder Roleplaying Game players through improved
												organization and gamification of their libraries and
												data
											</Card.Text>
											<Link
												to={{
													pathname: 'https://pathfinder-store.herokuapp.com/',
												}}
												target='_blank'>
												Pathfinder Store
											</Link>
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
											className='recent-card-front'>
											<Card.Title className='recent-card-title'>
												Hall of Games
											</Card.Title>
											<Card.Img src={HallofGames} />
										</Card>
										<Card
											onClick={() => setFlipped3(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												Hall of Games
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												This app, developed when I was at General Assembly, is
												an application which is a searchable database of video
												games, displays my hall of fame, as well keeps you up to
												date on soon to be releases.
											</Card.Text>
											<Link
												to={{
													pathname: 'https://hall-of-games.herokuapp.com/',
												}}
												target='_blank'>
												Hall of Games
											</Link>
										</Card>
									</ReactCardFlip>
								</Tilt>
							</div>
						</OverlayTrigger>
					</Col>
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
											className='recent-card-front'>
											<Card.Title className='recent-card-title'>
												Hangman
											</Card.Title>
											<Card.Img src={Hangman} />
										</Card>
										<Card
											onClick={() => setFlipped4(false)}
											className='recent-card-back'>
											<Card.Title className='recent-card-title'>
												Hangman
											</Card.Title>
											<Card.Text className='recent-card-back-text'>
												This app, developed when I was at General Assembly, is
												an example hangman style game.
											</Card.Text>
											<Link
												to={{
													pathname: 'https://juicester.github.io/hangman/',
												}}
												target='_blank'>
												Hangman
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

export default Recent;

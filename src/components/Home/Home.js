import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../About/About';
import About from '../About/About';
import Projects from '../Projects/Projects';

function Home() {
	return (
		<div>
			<h1>Video Game Designer & Full-Stack Developer</h1>
			<h4>
				I design and code web applications, video games and love what I do.
			</h4>
			<About />
			<Projects />
		</div>
	);
}

export default Home;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import JPLogo from '../../images/JP Logo.png'
import Button from 'react-bootstrap/Button'

function Header() {
	return (
		<header>
			<Navbar>
				<Navbar.Brand href="#home">
					<img
						src={JPLogo}
						width="50"
						height="50"
						className="d-inline-block align-top"
						alt="JP Logo"
					/>
				</Navbar.Brand>
				<Button inline variant='primary' className="mr-sm-2">Contact Me</Button>
			</Navbar>
		</header>
	);
}

export default Header;

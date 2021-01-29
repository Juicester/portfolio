import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import JPLogo from '../../images/JP Logo.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function Header() {
	return (
		<Navbar className='header-wrapper' expand='lg'>
			<Navbar.Brand href='#home'>
				<img
					src={JPLogo}
					width='50'
					height='50'
					className='d-inline-block align-top'
					alt='JP Logo'
				/>
			</Navbar.Brand>
			<Nav className='mr-auto'></Nav>
			<Button inline variant='primary' className='header-button'>
				Contact Me
			</Button>
		</Navbar>
	);
}

export default Header;

import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
	render() {
		return (
			<header>
				<h1>This is the Header Component</h1>
			</header>
		);
	}
}

export default Header;

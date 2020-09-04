import React from 'react';
import Button from 'react-bootstrap/Button';
import ModalAbout from '../ModalAbout/ModalAbout';
import './About.css';

function About() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div>
			<h3>
				Welcome to my website! I'm Justin Pedowitz. I recently graduated from
				Adelphi University where I majored in Computer Science with a
				concentration in Game Development. I graduated with honors in Computer
				Science and received the Mary Louise Buchanan Award in Computer Science.
				Please peruse my portfolio; it is meant to showcase my emerging talents.
				With the formalities behind us, I will now refute my parents long-held
				contention that I wasted a plethora of time and energy submitting to my
				unyielding passion for video games. I can still hear my mother's voice
				"Justin, what foolishness!" and "Justin, stop wasting all your time".
				Not to mention the time when my father angrily nailed my Halo 2 disc to
				my bedroom door. My devotion to video games has never waned. On the
				contrary, majoring in Computer Science at Adelphi has furthur enhanced
				my affinity for games and game making. As I begin my career with great
				anticipation I hope the animations, games and graphics contained on this
				website give you a sense why I have focused on my first love... video
				games. Mom and Dad, did you hear that?! I intend to work tirelessly
				prove to both of you wrong. I will turn this source of joy into
				something very practical. After all, everyone knows that being
				passionate about your work is a big step in the right direction. I would
				love to hear any comments at justin@pedowitz.net
			</h3>
			<Button
				className='modal-button'
				variant='primary'
				onClick={() => setModalShow(true)}>
				About this App
			</Button>
			<ModalAbout show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
}

export default About;

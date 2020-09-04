import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalAbout.css';

function ModalAbout(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<div className='body-modal'>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						About this Project
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						This is an app for GA. It has a database that has NFL teams, NFL
						Games and their statistics. Click one of the cards to see!
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button className='inside-modal-button' onClick={props.onHide}>
						Close
					</Button>
				</Modal.Footer>
			</div>
		</Modal>
	);
}

export default ModalAbout;

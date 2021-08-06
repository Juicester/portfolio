import React, { useState } from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { send } from 'emailjs-com';

function Contact() {
	const [toSend, setToSend] = useState({
		from_name: '',
		to_name: 'Justin',
		message: '',
		reply_to: '',
	});
	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	send('SERVICE ID', 'TEMPLATE ID', toSend, 'User ID')
	// 		.then((response) => {
	// 			console.log('SUCCESS!', response.status, response.text);
	// 		})
	// 		.catch((err) => {
	// 			console.log('FAILED...', err);
	// 		});
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(toSend);
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<h1>
				Thank you for taking time to reach out to me. Please leave your message
				below and I will respond ASAP
			</h1>
			<Form onSubmit={onSubmit}>
				<Row>
					<Col>
						<Form.Group className='form-label'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Full Name'
								// value={toSend.from_name}
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='form-label'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='email@example.com'
								controlId={toSend.reply_to}
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Form.Group className='form-label'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						as='textarea'
						rows={5}
						controlId={toSend.message}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button className='modal-button' variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			{/* <form onSubmit={onSubmit}>
				<input
					type='text'
					name='from_name'
					placeholder='from name'
					value={toSend.from_name}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='to_name'
					placeholder='to name'
					value={toSend.to_name}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='message'
					placeholder='Your message'
					value={toSend.message}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='reply_to'
					placeholder='Your email'
					value={toSend.reply_to}
					onChange={handleChange}
				/>
				<button type='submit'>Submit</button>
			</form> */}
		</Container>
	);
}

export default Contact;

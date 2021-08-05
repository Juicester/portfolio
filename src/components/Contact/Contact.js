import React from 'react';
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
		<Container>
			<h1>Thank you for taking time to reach out to me.  Please leave your message below and I will respond ASAP</h1>
			<Form>
				<Row>
					<Col>
						<Form.Group className='form-label'>
							<Form.Label>Name</Form.Label>
							<Form.Control type='text' placeholder='Full Name' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='form-label'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='email@example.com' />
						</Form.Group>
					</Col>
				</Row>
				<br />
				<Form.Group className='form-label'>
					<Form.Label>Message</Form.Label>
					<Form.Control as='textarea' rows={5} />
				</Form.Group>
				<Button className='modal-button' variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default Contact;
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
			<h1>Hello From Contact</h1>

			<Form>
				<Row>
					<Col>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type='text' placeholder='Full Name' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='email@example.com' />
						</Form.Group>
					</Col>
				</Row>
				<Form.Group>
					<Form.Label>Message</Form.Label>
					<Form.Control as='textarea' rows={3} />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default Contact;
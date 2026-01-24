import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function BookDemoModal({ showModal, setShowModal }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Demo booked")
        setShowModal(false)
    }

    return (
        <>
            <div className='container'>
                <Modal show={showModal} onHide={() => setShowModal(false)} className="book-demo-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Book a Demo</Modal.Title>
                    </Modal.Header>

                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your phone number" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Book Demo
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default BookDemoModal

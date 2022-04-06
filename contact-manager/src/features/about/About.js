import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function About(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button type="button"
                className="mockLink" 
                onClick={handleShow}>
                    About
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        About Contact Manager
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Written by <a 
                            href="http://tolleycoder.com"
                            target="_blank"
                            rel="noreferrer">
                                Chris Tolley
                            </a>
                    </p>
                    <p>
                        This contact manager allows the user to perform basic CRUD
                        on contact information. It provides functionality like searching
                        and sorting as well as single click actions like starting an email,
                        opening an address in a map app, or calling a contact (from
                        your phone or PC).
                    </p>
                    <p>
                        The UI is written in React/Redux using functional react components,
                        with VS Code, and a variety of browsers for testing. Also used 
                        bootstrap, lodash, and axios. The code was tracked with GIT 
                        (<a 
                            target="_blank" 
                            rel="noreferrer"
                            href="https://github.com/tolley/react-functional-contact-manager">
                                github
                        </a>)
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
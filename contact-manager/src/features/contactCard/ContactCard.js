import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import Address from '../address/Address';
import PhoneNumber from '../phoneNumber/PhoneNumber';
import MailTo from '../mailTo/MailTo';
import { remove } from '../contactsCollection/ContactsSlice';

export default function ContactCard(props) {
    const dispatch = useDispatch();
    const {
        id,
        firstname,
        lastname,
        phone,
        email,
        street,
        street2,
        city,
        state,
        zip
    } = props.contactData;

    const addressData = {
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zip
    };

    return (
        <Card className="contactCard">
            <Card.Title>
                <span className="name ucfirst">
                    {firstname}
                </span>
                &nbsp;
                <span className="name ucfirst">
                    {lastname}
                </span>
                <div 
                    className="deleteLink"
                    title="Delete"
                    onClick={() => {dispatch(remove(id))}}>
                    X
                </div>
            </Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <MailTo email={email} />
                </ListGroup.Item>
                <ListGroup.Item>
                    <PhoneNumber phoneNumber={phone} />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Address addressData={addressData} />
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

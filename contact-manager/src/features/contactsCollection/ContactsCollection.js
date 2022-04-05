// A primarily display component that will load and display 
// the contacts
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spinner } from 'react-bootstrap';
import { read } from './ContactsSlice';
import ContactCard from '../contactCard/ContactCard';
import ContactListItem from '../contactListItem/ContactListItem';

const ContactsCollection = () => {
    const dispatch = useDispatch();
    const displayMode = useSelector(state => state.header.displayMode);
    const contacts = useSelector(state => state.contacts);

    // Shortcut until I implement filtering
    const renderableContacts = contacts.contacts;

    // Load our contact data from our API
    useEffect(() => {
        dispatch(read());
    }, [dispatch]);

    if(contacts.loading) {
        return (
            <span>
                <br />
                <Spinner animation="border" role="status" size="lg" />
            </span>
        );
    } else {
        switch(displayMode) {
            case 'card':
                return (
                    renderCards(renderableContacts)
                );
            case 'list':
                return (
                    renderList(renderableContacts)
                );
            default:
                return (<h1>Unrecognized display mode!</h1>);
        }
    }
}

export default ContactsCollection;

function renderCards(contacts) {
    return (
        <div id="contacts_collection">
            {contacts.map(contactData => (
                <ContactCard contactData={contactData} key={contactData.id} />
            ))}
        </div>
    );
};

function renderList(contacts) {
    return (
        <Table responsive="md">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone #</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Street 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contactData => (
                    <ContactListItem contactData={contactData} key={contactData.id} />
                ))}
            </tbody>
        </Table>
    );
};
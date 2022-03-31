// A primarily display component that will load and display 
// the contacts
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from './ContactsCollectionAPI';
import { read } from './ContactsSlice';
import ContactCard from '../contactCard/ContactCard';
// import _ from 'lodash';

const ContactsCollection = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    // Shortcut until I implement filtering
    const renderableContacts = contacts.contacts;

    // Load our contact data from our API
    useEffect(() => {
        dispatch(read());
    }, []);

    if(contacts.loading) {
        return (
            <div>Loading...</div>
        );
    } else {
        return (
            <React.Fragment>
                {renderableContacts.map(contactData => (
                    <ContactCard contactData={contactData} key={contactData.id} />
                ))}
            </React.Fragment>
        );
    }
}

export default ContactsCollection;
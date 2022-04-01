// A primarily display component that will load and display 
// the contacts
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from './ContactsCollectionAPI';
import { read } from './ContactsSlice';
import ContactCard from '../contactCard/ContactCard';

const ContactsCollection = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    // Shortcut until I implement filtering
    const renderableContacts = contacts.contacts;

    // Load our contact data from our API
    useEffect(() => {
        dispatch(read());
    }, [dispatch]);

    if(contacts.loading) {
        return (
            <div>Loading...</div>
        );
    } else {
        return (
            <div id="contacts_collection">
                {renderableContacts.map(contactData => (
                    <ContactCard contactData={contactData} key={contactData.id} />
                ))}
            </div>
        );
    }
}

export default ContactsCollection;
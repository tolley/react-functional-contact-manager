// A primarily display component that will load and display 
// the contacts
import React, { useEffect, useState } from 'react';
import { fetchContacts } from './ContactsCollectionAPI';
import ContactCard from '../contactCard/ContactCard';
import _ from 'lodash';

const ContactsCollection = () => {
    const [allContactData, setAllContactData] = useState([]);
    const [displayMode, setDisplayMode] = useState('card');

    // Shortcut until I implement filtering
    const renderableContacts = allContactData;

    useEffect(() => {
        const allContacts = fetchContacts();
        setAllContactData(allContacts);
    }, []);

    if(allContactData.length) {
        return (
            <React.Fragment>
                {
                    renderableContacts.map(contactData => (
                        <ContactCard contactData={contactData} />
                    ))
                }
            </React.Fragment>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    };
}

export default ContactsCollection;
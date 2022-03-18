import React from 'react';
import Header from '../header/Header';
import ContactsCollection from '../contactsCollection/ContactsCollection';

export function Dashboard() {
    return (
        <span>
            <Header />
            <ContactsCollection />
        </span>
    );
}

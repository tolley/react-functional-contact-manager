import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function ContactCard(props) {
    const contactData = props.contactData;

    return (
        <div className="contactCard">
            {contactData.firstname + ' ' + contactData.lastname}
        </div>
    );
};
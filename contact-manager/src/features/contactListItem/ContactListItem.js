import React from 'react';
import PhoneNumber from '../phoneNumber/PhoneNumber';
import MailTo from '../mailTo/MailTo';

export default function ContactListItem(props) {
    const {
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

    return (
        <tr>
            <td className="ucfirst">{firstname}</td>
            <td className="ucfirst">{lastname}</td>
            <td><PhoneNumber phoneNumber={phone} /></td>
            <td><MailTo email={email} /></td>
            <td className="ucfirst">{street}</td>
            <td className="ucfirst">{street2}</td>
            <td className="ucfirst">{city}</td>
            <td className="uc">{state}</td>
            <td>{zip}</td>
        </tr>
    );
};